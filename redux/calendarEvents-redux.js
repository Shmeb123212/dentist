
const initialState = [
   
]


export const calendarEventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_EVENT_CALENDAR": {
            return [...state, action.info.value]
        }
        case "DELETE_EVENT_CALENDAR": {
            return [...state].filter(e=>e.id!==action.info.id)
        }
        case "EDIT_EVENT_CALENDAR": {
            return [...state].map(e=>e.id===action.info.id?{...e, ...action.info.value}:e)
        }
        default: 
            return state
    }
}



export const addEventCalendar = (info)=>({
    type: 'ADD_EVENT_CALENDAR', info
})

export const deleteEventCalendar = (info)=>({
    type: 'DELETE_EVENT_CALENDAR', info
})
export const editEventCalendar = (info)=>({
    type: 'EDIT_EVENT_CALENDAR', info
})