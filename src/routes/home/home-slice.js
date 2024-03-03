import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        currTab: 'React',
    },
    reducers: {
        setTab: (state, action) => {
            state.currTab = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTab } = homeSlice.actions

export default homeSlice.reducer