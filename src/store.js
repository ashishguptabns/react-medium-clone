import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './routes/home/home-slice'
import globalReducer from './global-slice'

export default configureStore({
    reducer: {
        home: homeReducer,
        global: globalReducer
    },
})