import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { signInReducer } from "./signIN-redux";
import {SidebarReducer} from './sidebar-redux';
import {hiddenSidebarReducer} from './hiddenSidebar-redux'
import {selectCalendarReducer} from './selectCalendar-redux' 
const makeStore = ()=> configureStore({
    reducer: {
        'signInAuth': signInReducer,
        'sidebar': SidebarReducer,
        'hiddenSidebar': hiddenSidebarReducer,
        'selectCalendar':selectCalendarReducer,
    }
})

export const wrapper = createWrapper(makeStore)