import { useDispatch } from "react-redux";
import { checkTodo } from "../../redux/slices/todoSlice";
import "./todo.css";
import CollapseForm from "../CollapseForm/CollapseForm";
import ControllTodo from "../ControllTodo/ControllTodo";

const Todo = ({todo}) => {
  const dispatch = useDispatch();


  const handleCheckBox = (id) => {
    dispatch(checkTodo(id));
  };

  

  return (
    <div className="todo">
      <input type="checkbox" onChange={() => handleCheckBox(todo.id)} checked={todo.done} />
      <span className={todo.done ? "complete" : ""}>{todo.todo}</span>
      <ControllTodo todo={todo} />
      <CollapseForm todo={todo} />
    </div>
  );
};

export default Todo;
