import { createSlice } from '@reduxjs/toolkit'

export const globalSlice = createSlice({
    name: 'global',
    initialState: {
    },
    reducers: {
        publishArticle: () => {
            console.log('publishArticle')
        }
    },
})

// Action creators are generated for each case reducer function
export const { publishArticle } = globalSlice.actions

export default globalSlice.reducer