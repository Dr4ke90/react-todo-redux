import "./todo.css";
import CollapseForm from "../CollapseForm/CollapseForm";
import ControllTodo from "../ControllTodo/ControllTodo";
import {useState } from "react";

const Todo = ({todo}) => {

  const getRandomColor = () =>   {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const [check, setCheck] = useState(false)
  const [open, setOpen] = useState(false)
  const [bgColor1] = useState(getRandomColor);
  const [bgColor2] = useState(getRandomColor);

  const handleClick = () => {
      setOpen(!open)
  }

  const todoStyle = {
    backgroundImage: `linear-gradient(90deg, ${bgColor1}, ${bgColor2})`,
    backgroundSize: 'cover',
    backgroundColor: bgColor1
  };

  return (
    <div className="todo" style={todoStyle}>
      <input type="checkbox"  onChange={() => setCheck(!check)} checked={check} />
      <span className={check ? "complete" : ""}>{todo.todo}</span>
      <ControllTodo todo={todo} handleClick={handleClick} />
      <CollapseForm todo={todo} open={open} setOpen={setOpen}/>
    </div>
  );
};

export default Todo;
