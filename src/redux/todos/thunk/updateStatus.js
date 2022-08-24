import { toggled } from "../actions";

const updatedStatus = (todoId, status) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !status,
      }),
      headers: {
        "Content-type": "application/json; Charset=UTF-8",
      },
    });
    const todo = await res.json();

    dispatch(toggled(todo.id));
  };
};

export default updatedStatus;
