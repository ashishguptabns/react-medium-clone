import styled from 'styled-components'
import * as React from 'react';
import EditorJS from '@editorjs/editorjs';
import { useEffect } from 'react';
import { editorTools, startData } from './helper';
import { useState } from 'react';
import { postArticleUseCase } from '../../lib/data-service';

let editor

const Container = styled.div`
    padding: 24px;
`

export const Story = () => {
    const [articleId, setArticleId] = useState()

    const handleArticleCreation = async () => {
        if (!articleId) {
            const id = (await postArticleUseCase()).id
            setArticleId(id)
            window.history.replaceState({}, '', `${id}`);
        }
    }
    const handleEditorChange = async (api, event) => {
        await handleArticleCreation()
        const blockData = await new Promise((res) => {
            const block = api.blocks.getBlockByIndex(api.blocks.getCurrentBlockIndex())
            block.save().then(data => res(data))
        })
        switch (event.type) {
            case 'block-changed':
                console.log(event.type, blockData)
                break
            case 'block-added':
                console.log(event.type, blockData)
                break
            case 'block-removed':
                console.log(event.type, blockData)
                break
            case 'block-moved':
                console.log(event.type, blockData)
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