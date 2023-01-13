const initialState = [
    {id:1, firstName: 'Test1', midName:'Test',lastName:'Test', gender: 'M', bday:'05.10.2001',number:'+7 (500) 765-34-43', status:'-',from:'-'},
    {id:2, firstName: 'Test2', midName:'Test',lastName:'Test', gender: 'M', bday:'12.24.2000',number:'+7 (643) 655-34-43', status:'-',from:'-'},
    {id:3, firstName: 'Test3', midName:'Test',lastName:'Test', gender: 'M', bday:'06.12.1980',number:'+7 (123) 775-34-43', status:'-',from:'-'},

]

export const pacientsReducer = (state = initialState, action) => {
    switch (action.type) {
       case 'ADD_NEW_PACIENT': {
        return [...state, action.info.value]
       }
       case 'DELETE_NEW_PACIENT': {
        return [...state].filter(pac=>pac.id !== action.info.id)
       }
       case 'EDIT_NEW_PACIENT': {
        return [...state].filter(pac=>pac.id === action.info.id ? {...pac, ...action.info.value} : pac)
       }
        default: 
            return state
    }
}

export const addNewPacient = (info)=>({
    type: 'ADD_NEW_PACIENT', info
})
export const deleteNewPacient = (info)=>({
    type: 'DELETE_NEW_PACIENT', info
})
export const editNewPacient = (info)=>({
    type: 'EDIT_NEW_PACIENT', info
})
