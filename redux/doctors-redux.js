const initialState = [
    {id:1, firstName: 'Test1', midName:'Test',lastName:'Test', gender: 'M', bday:'05.10.1989',number:'+7 (500) 765-34-43', mail: 'test@gmail.com', salary: '100.000 руб', post: 'doctor', timeActive: ['09','10','11','12','13','14','15','16','17']},
    {id:2, firstName: 'Test2', midName:'Test',lastName:'Test', gender: 'M', bday:'10.02.2000',number:'+7 (643) 655-34-43', mail: 'test@gmail.com', salary: '100.000 руб', post: 'main doctor',timeActive: ['07','10','11','14','15','16']},
    {id:3, firstName: 'Test3', midName:'Test',lastName:'Test', gender: 'M', bday:'02.10.1995',number:'+7 (123) 775-34-43', mail: 'test@gmail.com', salary: '100.000 руб', post: 'doctor',timeActive: ['07','08','09','10','11','14','15','16']},

]

export const doctorsReducer = (state = initialState, action) => {
    switch (action.type) {
       case 'ADD_NEW_DOCTOR': {
        return [...state, action.info.value]
       }
       case 'DELETE_NEW_DOCTOR': {
        return [...state].filter(pac=>pac.id !== action.info.id)
       }
       case 'EDIT_NEW_DOCTOR': {
        return [...state].filter(pac=>pac.id === action.info.id ? {...pac, ...action.info.value} : pac)
       }
        default: 
            return state
    }
}

export const addNewDoctor = (info)=>({
    type: 'ADD_NEW_DOCTOR', info
})
export const deleteNewDoctor = (info)=>({
    type: 'DELETE_NEW_DOCTOR', info
})
export const editNewDoctor = (info)=>({
    type: 'EDIT_NEW_DOCTOR', info
})
