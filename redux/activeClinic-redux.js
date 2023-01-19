const initialState = [
    {id:1,nameClinic:'Test 1', active:false},
    {id:2,nameClinic:'Test 2', active:false},
    {id:3,nameClinic:'Test 3', active:false},

]

export const clinicActiveReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_ACTIVE_CLINIC": {
            return  [...state].map(e=>e.id == action.info.id ? {...e, active:true} :{...e, active: false})
        }
        default: 
            return state
    }
}

export const changeActiveClinic = (info)=>({
    type: 'CHANGE_ACTIVE_CLINIC', info
})
