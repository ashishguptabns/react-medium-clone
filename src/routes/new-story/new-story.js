import styled from 'styled-components'
import * as React from 'react';
import EditorJS from '@editorjs/editorjs';
import { useEffect } from 'react';
import { editorTools } from './helper';

let editor

const Container = styled.div`
    padding: 24px;
`
const handleChange = (api, event) => {
    editor.save().then((outputData) => {
        console.log(outputData)
    }).catch((error) => {
        console.log('handleChange ', error)
    });
}
const editorConfig = {
    holder: 'editorjs',
    tools: editorTools,
    data: {
        "time": 1709582255668,
        "blocks": [
            {
                "id": "oUq2g_tl8y",
                "type": "header",
                "data": {
                    "text": "Modify this headline to start..",
                    "level": 2
                }
            },
            {
                "id": "pBH41kPPLD",
                "type": "delimiter",
                "data": {}
            },
            {
                "id": "zbGZFPM-iI",
                "type": "paragraph",
                "data": {
                    "text": "To play around with blocks, try putting your cursor on the left side and you will find the dropdowns!"
                }
            }
        ],
        "version": "2.29.0"
    },
    onReady: () => {
        console.log('Editor.js is ready to work!')
    },
    onChange: handleChange,
    autofocus: false,
    placeholder: 'Write your content here.',
    logLevel: 'ERROR',
    readOnly: false,
    inlineToolbar: ['link', 'bold', 'italic'],
}
export const NewStory = () => {

    useEffect(() => {
        document.title = 'Share your coding knowledge';
        if (!editor) {
            editor = new EditorJS(editorConfig)
        }
    }, [])

    return (
        <Container id='editorjs' />
    )
}