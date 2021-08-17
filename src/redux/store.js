import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from './token'

export default configureStore({
    reducer: {
        token: tokenReducer
    }
});