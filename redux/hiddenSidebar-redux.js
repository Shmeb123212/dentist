
const initialState = {
    isHidden: false
}


export const hiddenSidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_HIDDEN_SIDEBAR': {
            return {...state, isHidden: action.info.value}
        }
        default: 
            return state
    }
}

export const isAuthChange = (info)=>({
    type: 'IS_HIDDEN_SIDEBAR', info
})