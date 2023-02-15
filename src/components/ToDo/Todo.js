import { useDispatch, useSelector } from 'react-redux'
import { todosState, deleteTodo, checkTodo, editTodo } from '../../redux/slices/todoSlice'
import './todo.css'
import { FiXOctagon, FiEdit } from "react-icons/fi";
import { GrUpdate } from "react-icons/gr";
import { useState } from 'react';


const Todo = () => {
    const {todos} = useSelector(todosState)
    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState('')
    const [open, setOpen] = useState(false)

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    const handleCheckBox = (id) => {
        dispatch(checkTodo(id))
    }

   const handleChange = (e) => {
        setInputValue(e.target.value)
    }

   const handleUpdate = (id, value) => {
        if(inputValue === '') return
        dispatch(editTodo({id:id, value:value}))
        setInputValue('')
        setOpen(!open)
    }

  return (
    <div className='todo-prev'>
        {todos.map((todo) => (
            <div key={`${todo.id}`} className='todo'> 
                <input type='checkbox' onChange={() => handleCheckBox(todo.id)} checked={todo.done} />
                <span className={todo.done ? 'complete' : ''}>{todo.todo}</span>
                <div className='control'> 
                    <FiEdit className='button'  
                        data-toggle="collapse" 
                        data-target={`${'#todo' + todo.id}`} 
                        aria-expanded={open} 
                        aria-controls={`${'todo' + todo.id}`}/>
                    <FiXOctagon className='button' onClick={() => handleDelete(todo.id)} />
                </div>  
                <div className='collapse' id={`${'todo' + todo.id}`}>
                    <input type='text'onChange={handleChange} onClick={() => !open} value={inputValue}/>
                    <GrUpdate className='btnUpdate' onClick={() => handleUpdate(todo.id,inputValue)}/>   
                </div> 
            </div>
        ))}
    </div>  
  )
}

export default Todo;
