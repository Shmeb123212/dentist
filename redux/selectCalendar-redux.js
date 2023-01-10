
const initialState = {
  active: 'Month',
  dropList: ['Month','Week', 'Day',]
}

export const selectCalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SELECT_CALENDAR': {
      return {...state, active: action.info.value}
    }
    default:
      return state
  }
}



export const changeSelectCalendar = (info)=>({
  type:'CHANGE_SELECT_CALENDAR',info
})