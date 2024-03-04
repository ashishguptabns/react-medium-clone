import * as React from 'react';
import EditorJS from '@editorjs/editorjs';
import { useEffect } from 'react';
import { editorTools } from './helper';

const editorConfig = {
    holder: 'editorjs',
    tools: editorTools,
    data: {},
    onReady: () => {
        console.log('Editor.js is ready to work!')
    },
    autofocus: false,
    placeholder: 'Write your content here.',
    logLevel: 'ERROR',
    readOnly: false,
    inlineToolbar: ['link', 'marker', 'bold', 'italic'],
}
let editor
export const NewStory = () => {

    useEffect(() => {
        if (!editor) {
            editor = new EditorJS(editorConfig)
        }
    }, [])

    return (
        <div id='editorjs' />
    )
}