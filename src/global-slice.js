import { createSlice } from '@reduxjs/toolkit'

export const globalSlice = createSlice({
    name: 'global',
    initialState: {
        articleId: ''
    },
    reducers: {
        publishArticle: () => {
            console.log('publishArticle')
        },
        setArticleId: (state, action) => {
            state.articleId = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { publishArticle, setArticleId } = globalSlice.actions

export default globalSlice.reducer