import React from 'react'
import TodoForm from '../todoForm/TodoForm';
import './todoList.css'
import Todo from '../ToDo/Todo';

const ToDoList = () => {


  return (
    <div className='todo-list'>
        <h2>What's your plan for today?</h2>
        <TodoForm />
        <Todo />
    </div>
  )
}


export default ToDoList;