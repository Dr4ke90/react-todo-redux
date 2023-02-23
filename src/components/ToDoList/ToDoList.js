import React from 'react'
import TodoForm from '../TodoForm/TodoForm';
import './todoList.css'
import Todo from '../ToDo/Todo';
import { useSelector } from 'react-redux';
import { todosState } from '../../redux/slices/todoSlice';

const ToDoList = () => {

    const {todos} = useSelector(todosState)

  return (
    <div className='todo-list'>
        <h2>What's your plan for today?</h2>
        <TodoForm />
        <div className='todo-prev'>
            {todos.map((todo) => (
                <Todo todo={todo} key={`${todo.id}`} />
            ))}
        </div>  
    </div>
  )
}


export default ToDoList;