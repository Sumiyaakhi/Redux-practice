import React, { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const [task, setTask] = useState("");
  //  console.log(state);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isCompleted: false,
    };
    dispatch({ type: "addTodo", payload: todo });
  };
  return (
    <div>
      <h1>Add todo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Todo">Task</label>
        <input
          className="border-green-500 "
          type="text"
          name="todo"
          id="todo"
          onBlur={(e) => setTask(e.target.value)}
        />
        <button className="btn bg-green-500" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
