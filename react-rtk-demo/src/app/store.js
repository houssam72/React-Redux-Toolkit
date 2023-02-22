import { configureStore } from '@reduxjs/toolkit'
import { cakeReducer } from '../features/cake/cakeSlice'
import { icecreamReducer } from "../features/icecream/icecreamSlice";
import { useReducer } from "../features/user/userSlice"

// const reduxLogger=require('redux-logger');
// const logger=reduxLogger.createLogger()


export const  store=configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
        user:useReducer
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
}) 

