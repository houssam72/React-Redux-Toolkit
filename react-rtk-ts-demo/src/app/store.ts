import { configureStore } from '@reduxjs/toolkit'
import { cakeReducer } from '../features/cake/cakeSlice'
import { icecreamReducer } from "../features/icecream/icecreamSlice";
import { useReducer } from "../features/user/userSlice"

// const reduxLogger=require('redux-logger');
// const logger=reduxLogger.createLogger()


export const  store=configureStore({
    reducer:{
        icecream:icecreamReducer,
        cake:cakeReducer,
        user:useReducer
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
}) 
export type RootState = ReturnType< typeof store.getState>
export type AppDispatch = typeof store.dispatch
