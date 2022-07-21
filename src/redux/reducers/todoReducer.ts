import {init} from '../../data';
import *as types from '../constants/Constants';
import {getRandomInt} from '../../ramdom/number';
interface Action{
    type:string,
    payload:()=>void

}    
const todoReducer=(state=init,action:Action)=>{
    switch (action.type) {
        case types.HANDLE_CHANGE_CHECK_BOX:{
            const newState={
                todos: state.todos.map((todo:any) => {
                    if (todo.id === action.payload) {
                    todo.completed = !todo.completed;
                    }
                    return todo;
                    })  
            }
            return newState;
        }
        case types.DELETE_TODO:{
            const newTodo=state.todos.filter((todo:any)=>todo.id!==action.payload);
            const newState={
                todos:newTodo,
            }
            return newState;
        }
        case types.ADD_TODO:{
            const newTodo={
                id:getRandomInt(100),
                title:action.payload,
                completed:false
            }
            return {todos:[...state.todos,newTodo]}
        }
            
        default:
            return {...state}
    }

}
export default todoReducer;