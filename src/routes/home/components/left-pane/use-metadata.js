import { htmlToPlainText } from "./helper"
import { useState, useEffect } from "react"

export const useMetaData = (article) => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    useEffect(() => {
        if (article && article.blocks) {
            for (const block of article.blocks) {
                if (block.type === 'header') {
                    setTitle(block.data.text)
                }
                if (block.type === 'paragraph') {
                    const plainText = htmlToPlainText(block.data.text);
                    setDesc(plainText)
                    break
                }
            }
        }
    }, [])

    return [title, desc]
}