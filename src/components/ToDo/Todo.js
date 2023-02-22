import "./todo.css";
import CollapseForm from "../CollapseForm/CollapseForm";
import ControllTodo from "../ControllTodo/ControllTodo";
import {useState } from "react";

const Todo = ({todo}) => {

  const [check, setCheck] = useState(false)
  const [open, setOpen] = useState(false)

  const handleClick = () => {
      setOpen(!open)
  }


  return (
    <div className="todo">
      <input type="checkbox"  onChange={() => setCheck(!check)} checked={check} />
      <span className={check ? "complete" : ""}>{todo.todo}</span>
      <ControllTodo todo={todo} handleClick={handleClick} />
      <CollapseForm todo={todo} className={open ? 'show' : 'collapse'} />
    </div>
  );
};

export default Todo;
