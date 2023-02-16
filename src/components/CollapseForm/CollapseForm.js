import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { editTodo, toggle } from '../../redux/slices/todoSlice';
import './collapseForm.css'

const CollapseForm = ({todo}) => {

    const dispatch = useDispatch()
    const updateRef = useRef(null)


    const handleUpdate = (id) => {
        if(updateRef === '') return
        dispatch(editTodo({id:id, value:updateRef.current.value}))
        dispatch(toggle(todo.id))
    }

  return (
    <div className={todo.open ? 'show' : 'collapse'} >  
        <input type='text' ref={updateRef} />
        <button className='btnUpdate' onClick={() => handleUpdate(todo.id)} >Update </button>   
    </div> 
  )
}


export default CollapseForm;