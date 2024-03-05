import styled from 'styled-components'
import * as React from 'react';
import EditorJS from '@editorjs/editorjs';
import { useEffect } from 'react';
import { editorTools, startData } from './helper';
import { deleteBlockUseCase, patchArticleUseCase, postArticleUseCase, postBlockUseCase } from '../../lib/data-service';
import { useDispatch } from 'react-redux'
import { setArticleId } from '../../global-slice';
import { useParams } from 'react-router-dom';

let editor

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
    const handleEditorChange = async (api, event) => {
        await handleArticleCreation()
        const blockData = await new Promise((res) => {
            const block = api.blocks.getBlockByIndex(api.blocks.getCurrentBlockIndex())
            block.save().then(data => res(data))
        })
        blockData.articleId = articleId
        switch (event.type) {
            case 'block-changed':
                handleChangedBlock(blockData)
                break
            case 'block-added':
                handleMovedBlock()
                handleAddedBlock(blockData)
                break
            case 'block-removed':
                handleMovedBlock()
                handleDeletedBlock(blockData)
                break
            case 'block-moved':
                handleMovedBlock()
                break
        }
    }
    const editorConfig = {
        holder: 'editorjs',
        tools: editorTools,
        data: startData,
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
        }
    }, [])

    return (
        <Container id='editorjs' />
    )
}