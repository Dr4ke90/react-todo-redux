import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/slices/todoSlice';
import './todoForm.css';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = () => {


  const dispatch = useDispatch();

  const initialState = {
    todo: ''
  }

  const [toDo, setToDo] = useState(initialState);
 


  const handleChange = (event) => {
      const {name, value} = event.target;

      setToDo({
        ...toDo,
        [name]:value,
        id: uuidv4()
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(toDo.todo === '') return

    dispatch(addTodo(toDo))
    setToDo({
      ...initialState
     })
  }


  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input 
          type='text' 
          name='todo' 
          placeholder='Add to do... ' 
          value={toDo.todo} 
          className='todo-input'
          onChange={handleChange} />
        <button className='add-button'>Add</button>
    </form>
  )
}


export default TodoForm;