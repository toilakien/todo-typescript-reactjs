import React from "react";
import {useDispatch} from 'react-redux';
import *as actions from '../redux/actions/Action';
interface Todo{
    id:number,
    title:string,
    completed:boolean
}
interface Props{
    Todo:Todo
}
const TodoItem:React.FC<Props>=({Todo:Todo})=>{
    const dispatch = useDispatch();   
    const onHandleChange=(id:number)=>{
        dispatch(actions.handleChange(id));
    }
    const onDelete=(id:number)=>{
        dispatch(actions.deleteTodo(id));
        console.log(1234,dispatch(actions.deleteTodo(id)));
        
    }
    return (
        <li className="todo-item" key={Todo.id}>
            <input onChange={()=>onHandleChange(Todo.id)} checked={ Todo.completed} type='checkbox'/>
            <span className={Todo.completed?"completed":''}>{Todo.title}</span>
            <button onClick={()=>onDelete(Todo.id)} className="btn-style">x</button>
        </li>
    )
}
export default TodoItem;