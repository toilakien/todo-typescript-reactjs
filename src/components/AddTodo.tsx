import React,{useState} from "react";
import { useDispatch } from "react-redux";
import *as actions from '../redux/actions/Action'
function AddTodo(){
    const dispatch=useDispatch();
    const [text,setText]=useState<string>('');
    const onAddTodo=(text:string)=>{

        dispatch(actions.addTodo(text));
    }
    return (
        <form className="form-container">
            <input onChange={(e)=>setText(e.target.value)}  type="text" placeholder="Add Todo..." className="input-text" />
            <input onClick={(e)=>{e.preventDefault(); onAddTodo(text)}} type="submit" value="Submit" className="input-submit" />
        </form>
    )
}
export default AddTodo;