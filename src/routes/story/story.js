import styled from 'styled-components'
import * as React from 'react';
import EditorJS from '@editorjs/editorjs';
import { useEffect } from 'react';
import { editorTools, startData } from './helper';
import { deleteBlockUseCase, fetchArticleUseCase, patchArticleUseCase, postArticleUseCase, postBlockUseCase } from '../../lib/data-service';
import { useDispatch } from 'react-redux'
import { setArticleId } from '../../global-slice';
import { useParams } from 'react-router-dom';

let editor, editorData = {}

const Container = styled.div`
    padding: 24px;
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
                patchArticleUseCase(articleId, blockIds)
            }).catch((error) => {
                console.log('handleMovedBlock', error)
            });
    }
    const handleDeletedBlock = (blockData) => {
        deleteBlockUseCase(blockData)
    }
    const handleEvent = async (api, event) => {
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
        placeholder: 'Write your content here.',
        logLevel: 'ERROR',
        readOnly: false,
        inlineToolbar: ['link', 'bold', 'italic'],
    }
    useEffect(() => {
        document.title = 'Share your knowledge';
        if (!editor) {
            editor = new EditorJS(editorConfig)
            setTimeout(() => {
                if (articleId) {
                    fetchArticleUseCase(articleId)
                        .then(data => {
                            if (data.article.blocks.length) {
                                editorData.blocks = data.article.blocks
                                console.log(editorData)
                                editor.render(editorData)
                            }
                        })
                } else {
                    editor.render(startData)
                }
            }, 100);
        }

    }, [articleId])

    return (
        <Container id='editorjs' />
    )
}