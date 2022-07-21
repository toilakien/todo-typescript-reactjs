import React from "react";
import TodoItem from "./TodoItem";

interface Todo{
    id:number,
    title:string,
    completed:boolean
}
interface Props{
    Todo:Todo[]
}
const Todos:React.FC<Props>=({Todo})=>{
   
    console.log(1);
    console.log(Todo);
    
    
    return (
        <div>
            {
            Todo.map((todo:Todo)=>(
                <TodoItem key={todo.id} Todo={todo} 
                />
            ))}
        </div>
    )
}
export default Todos;