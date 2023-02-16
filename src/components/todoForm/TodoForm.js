import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/slices/todoSlice';
import './todoForm.css';

const TodoForm = () => {


  const dispatch = useDispatch();

  const initialState = {
      id: 1,
      todo: '',
      done: false,
      open: false,
  }

  const [toDo, setToDo] = useState(initialState);
 


  const handleChange = (event) => {
      const {name, value} = event.target;

      setToDo({
        ...toDo,
        [name]:value
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(toDo.todo == '') return

    dispatch(addTodo(toDo))
    setToDo({
      ...initialState, 
      id: toDo.id + 1,
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