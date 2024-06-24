import React, { ChangeEvent, useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};
const initialState = {
  name: "",
  age: "",
  hobbies: [] as string[],
};

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addAge":
      return { ...currentState, age: action.payload };
    case "addHobbies":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };
    default:
      return currentState;
  }
};
const UserInfoWithRedux = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          className="border-2 m-12 border-green-500 "
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addAge", payload: e.target.value })
          }
          className="border-2 m-12 border-green-500 "
          type="text"
          name="number"
          id="age"
          placeholder="age"
        />
        <input
          onBlur={(e) =>
            dispatch({ type: "addHobbies", payload: e.target.value })
          }
          className="border-2 m-12 border-green-500 "
          type="text"
          name="hobbies"
          id="hobbies"
          placeholder="hobbies"
        />
        <input
          className="bg-green-500 text-white p-3 rounded-lg"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default UserInfoWithRedux;
