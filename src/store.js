import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './routes/home/home-slice'

export default configureStore({
    reducer: {
        home: homeReducer
    },
})