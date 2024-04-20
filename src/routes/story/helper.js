import Header from '@editorjs/header';
import CodeTool from '@editorjs/code';
import NestedList from '@editorjs/nested-list';
import Table from '@editorjs/table'
import Delimiter from '@editorjs/delimiter';
import Checklist from '@editorjs/checklist'
import Paragraph from '@editorjs/paragraph';
import ImageTool from '@editorjs/image';

export const editorTools = {
    image: {
        class: ImageTool,
        config: {
            uploader: {
                async uploadByUrl(url) {
                    url = 'https://firebasestorage.googleapis.com/v0/b/app-builder-666.appspot.com/o/images%2Farticles%2Fevents_list.png?alt=media&token=ee89b26f-c394-4559-860c-f0101bf1cbfe'
                    return {
                        success: 1,
                        file: {
                            url: url,
                        }
                    };
                },
            }
        }
    },
    paragraph: {
        class: Paragraph,
        inlineToolbar: true,
        preserveBlank: true
    },
    delimiter: Delimiter,
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

}

export const startData = {
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
}