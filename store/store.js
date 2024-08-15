import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/AuthSlice"
import {authApi} from '../services/authService'
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        auth:authReducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware ().concat(authApi.middleware)
});

setupListeners(store.dispatch)

export default store