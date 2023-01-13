import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { signInReducer } from "./signIN-redux";
import {SidebarReducer} from './sidebar-redux';
import {hiddenSidebarReducer} from './hiddenSidebar-redux'
import {calendarColorsReducer} from './calendarColors-redux'
import {calendarEventsReducer} from './calendarEvents-redux'
import {calendarUntilsReducer} from './calendarUntils-redux'
import {pacientsReducer} from './pacients-redux';
import {doctorsReducer} from './doctors-redux';


const makeStore = ()=> configureStore({
    reducer: {
        'signInAuth': signInReducer,
        'sidebar': SidebarReducer,
        'hiddenSidebar': hiddenSidebarReducer,
        'calendarColors':calendarColorsReducer,
        'calendarEvents':calendarEventsReducer,
        'calendarUntils':calendarUntilsReducer,
        'pacients': pacientsReducer,
        'doctors': doctorsReducer,

    }
})

export const wrapper = createWrapper(makeStore)