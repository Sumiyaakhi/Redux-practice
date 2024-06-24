import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";

type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};
const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  console.log(state);
  return (
    <div>
      {state.map((item: TTodo) => (
        <p
          className="cursor-pointer"
          onClick={() => dispatch({ type: "taskComplete", payload: item.id })}
        >
          {item.title}
        </p>
      ))}
    </div>
  );
};

export default TodoList;
