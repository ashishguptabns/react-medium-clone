import Header from '@editorjs/header';
import CodeTool from '@editorjs/code';
import NestedList from '@editorjs/nested-list';
import Table from '@editorjs/table'
import Quote from '@editorjs/quote';
import Delimiter from '@editorjs/delimiter';
import ImageTool from '@editorjs/image';
import Checklist from '@editorjs/checklist'

export const editorTools = {
    header: {
        class: Header,
        inlineToolbar: ['link']
    },
    list: {
        class: NestedList,
        inlineToolbar: true,
        config: {
            defaultStyle: 'unordered'
        },
    },
    code: CodeTool,
    table: {
        class: Table,
        inlineToolbar: true,
        config: {
            rows: 2,
            cols: 3,
        },
    },
    checklist: {
        class: Checklist,
        inlineToolbar: true,
    },
    quote: {
        class: Quote,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+O',
        config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: 'Quote\'s author',
        },
    },
    delimiter: Delimiter,
    image: {
        class: ImageTool,
        config: {
            endpoints: {
                byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
            }
        }
    }
}