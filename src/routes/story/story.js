import styled from 'styled-components'
import * as React from 'react';
import EditorJS from '@editorjs/editorjs';
import { useEffect } from 'react';
import { editorTools, startData } from './helper';
import { deleteBlockUseCase, fetchArticleUseCase, patchArticleUseCase, postArticleUseCase, postBlockUseCase } from '../../lib/data-service';
import { useDispatch } from 'react-redux'
import { setArticleId } from '../../global-slice';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { tabs } from '../../lib/mock-data';

let editor, editorData = {}

const Tag = styled.div`
    cursor: pointer;
    border: solid 1px #F2F2F2;
    padding: 4px 10px;
    text-align: center;
    border-radius: 20px;
    margin-bottom: 10px;
    width: fit-content;
    color: ${props => props.$isSelected ? '#242424' : 'gray'};
    background: ${props => props.$isSelected ? '#e1e1e1' : 'white'};
`
const Tags = styled.div`
    width: 300px;
    border-left: solid 1px #F2F2F2;
    padding: 30px 20px;
    text-align: -webkit-center;
    @media(max-width: 700px){
        display: none;
    }
`
const Container = styled.div`
    display: flex;
`
const Editor = styled.div`
    padding: 24px;
    width: 100%;
`

export const Story = () => {
    const dispatch = useDispatch()
    let articleId = useParams().id
    if (articleId) {
        dispatch(setArticleId(articleId))
    }

    const handleArticleCreation = async () => {
        if (!articleId) {
            articleId = (await postArticleUseCase()).id
            window.history.replaceState({}, '', `${articleId}`);
            dispatch(setArticleId(articleId))
        }
    }
    const handleChangedBlock = (blockData) => {
        postBlockUseCase(blockData)
    }
    const handleAddedBlock = (blockData) => {
        postBlockUseCase(blockData)
    }
    const handleMovedBlock = () => {
        editor.save()
            .then((outputData) => {
                const blocks = outputData.blocks
                const blockIds = []
                for (const block of blocks) {
                    blockIds.push(block.id)
                }
                patchArticleUseCase(articleId, { blockIds: blockIds })
            }).catch((error) => {
                console.log('handleMovedBlock', error)
            });
    }
    const handleDeletedBlock = (blockData) => {
        deleteBlockUseCase(blockData)
    }
    const handleEvent = async (api, event) => {
        if (editor.configuration.readOnly) {
            return
        }
        const blockId = event.detail.target.id
        const blockData = event.type === 'block-removed' ? { id: blockId } : await new Promise((resolve) => {
            const block = api.blocks.getById(blockId)
            block.save().then(data => resolve(data))
        })
        blockData.articleId = articleId
        switch (event.type) {
            case 'block-changed':
                handleChangedBlock(blockData)
                break
            case 'block-added':
                handleAddedBlock(blockData)
                break
            case 'block-removed':
                handleDeletedBlock(blockData)
                break
            case 'block-moved':
                break
        }
        handleMovedBlock()
    }
    const handleEditorChange = async (api, event) => {
        await handleArticleCreation()
        if (Array.isArray(event)) {
            for (const eve of event) {
                handleEvent(api, eve)
            }
        } else {
            handleEvent(api, event)
        }
    }
    const editorConfig = {
        holder: 'editorjs',
        tools: editorTools,
        data: editorData,
        onChange: handleEditorChange,
        autofocus: false,
        logLevel: 'ERROR',
        readOnly: process.env.NODE_ENV !== "development",
        inlineToolbar: ['link', 'bold', 'italic'],
    }

    const [title, setTitle] = useState('Share your knowledge')
    useEffect(() => {
        document.title = title;
    }, [title])

    const handleEditorData = (article) => {
        setTags(article.tags)
        if (article.blocks && article.blocks.length) {
            editorData.blocks = article.blocks
            for (const block of editorData.blocks) {
                if (block.type === 'header') {
                    setTitle(block.data.text)
                    break
                }
            }
            editor.render(editorData)
        }
    }
    useEffect(() => {
        if (!editor) {
            editor = new EditorJS(editorConfig)
            setTimeout(() => {
                if (articleId) {
                    fetchArticleUseCase(articleId)
                        .then(handleEditorData)
                } else {
                    editor.render(startData)
                }
            }, 100);
        }

    }, [])

    const [tags, setTags] = useState([])
    const handleTagClick = (tag) => {
        tag = tag.title.toLowerCase()
        setTags(prevTags => {
            let tags
            if (prevTags.includes(tag)) {
                tags = prevTags.filter(t => t !== tag);
            } else {
                tags = [...prevTags, tag];
            }
            patchArticleUseCase(articleId, { tags: tags })
            return tags
        });
    }

    return (
        <Container>
            <Editor id='editorjs' />
            {process.env.NODE_ENV === "development" && <Tags>
                {tabs.map(tag => <Tag $isSelected={tags.includes(tag.title.toLowerCase())} onClick={() => handleTagClick(tag)} key={tag.id}>{tag.title}</Tag>)}
            </Tags>}
        </Container>
    )
}