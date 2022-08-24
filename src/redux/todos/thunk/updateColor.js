import { colorSelected } from "../actions";

const updatedColor = (todoId, color) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        color: color,
      }),
      headers: {
        "Content-type": "application/json; Charset=UTF-8",
      },
    });
    const todo = await res.json();

    dispatch(colorSelected(todo.id, todo.color));
  };
};

export default updatedColor;
