import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { editTodo } from '../../redux/slices/todoSlice';
import './collapseForm.css'

const CollapseForm = ({todo, open,setOpen}) => {

    const dispatch = useDispatch()
    const updateRef = useRef(null)


    const handleUpdate = (id) => {
        if(updateRef.current.value === '') return
        dispatch(editTodo({id:id, value:updateRef.current.value}))
        updateRef.current.value = ''
        setOpen(!open)
    }

  return (
    <div className={open ? 'show' : 'collapse'} >  
        <input type='text' ref={updateRef} />
        <button className='btnUpdate' onClick={() => handleUpdate(todo.id)} >Update </button>   
    </div> 
  )
}


export default CollapseForm;