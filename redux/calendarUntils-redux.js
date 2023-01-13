const initialState = {
    activeEventToChange: '',
    activeModalToChange: false
}

export const calendarUntilsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_ACTIVE_EVENT": {
            return {...state, activeEventToChange: action.info.value}
        }
        case "ACTIVE_MODAL_EVENT": {
            return {...state, activeModalToChange: action.info.value}
        }
        default: 
            return state
    }
}

export const changeActiveEvent = (info)=>({
    type: 'CHANGE_ACTIVE_EVENT', info
})

export const activeModalEvent = (info)=>({
    type: 'ACTIVE_MODAL_EVENT', info
})
