import *as types from '../constants/Constants';
export const handleChange=(payload:number)=>{
    return {
        type:types.HANDLE_CHANGE_CHECK_BOX,
        payload
    }
}
export const deleteTodo=(payload:number)=>{
    return {
        type:types.DELETE_TODO,
        payload
    }
}

export const addTodo=(payload:string)=>{
    return {
        type:types.ADD_TODO,
        payload
    }
}