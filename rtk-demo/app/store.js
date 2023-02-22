const reduxToolkit = require("@reduxjs/toolkit");
const { cakeReducer } = require("../features/cake/cakeSlice");
const { icecreamReducer } = require("../features/icecream/icecreamSlice");
const reduxLogger=require('redux-logger');
const { userRecer } = require("../features/user/userSlice");

const logger=reduxLogger.createLogger()


const store=reduxToolkit.configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
        user:userRecer
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
}) 

module.exports.store=store 