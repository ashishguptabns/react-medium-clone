import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        currTab: '',
    },
    reducers: {
        setTab: (state, action) => {
            state.currTab = action.payload || state.currTab
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTab } = homeSlice.actions

export default homeSlice.reducer