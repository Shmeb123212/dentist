import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { signInReducer } from "./signIN-redux";

const makeStore = ()=> configureStore({
    reducer: {
        'signInAuth': signInReducer
    }
})

export const wrapper = createWrapper(makeStore)