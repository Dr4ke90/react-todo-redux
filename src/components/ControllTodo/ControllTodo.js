import React from "react";
import { FiXOctagon, FiEdit } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { deleteTodo, toggle } from "../../redux/slices/todoSlice";
import './controllTodo.css'


const ControllTodo = ({todo}) => {
 
    const dispatch = useDispatch()
    

  return (
    <div className="control">
      <FiEdit
        className="button"
        onClick={() => dispatch(toggle(todo.id))}
         />
      <FiXOctagon 
        className="button" 
        onClick={() => dispatch(deleteTodo(todo.id))} />
    </div>
  );
}

export default ControllTodo;