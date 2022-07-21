import '../App.css';
import Header from "./layout/Header";
import React, { useState } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import {useSelector} from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
interface Todo{
    id:number,
    title:string,
    completed:boolean
}
const TodoApp=()=>{
    const todo=useSelector((state:RootState)=> state.todoReducer?.todos)

    return (
        <div className="container">
            <Header/>
            <AddTodo/>
            <Todos Todo = {todo} />
        </div>
    );
}
export default TodoApp;