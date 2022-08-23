import { added } from "../actions";

const fetchTodos = (todoText) => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:9000/todos", {
      method: "POST",
      body: JSON.stringify({
        title: todoText,
        complete: false,
      }),
      headers: {
        "Content-type": "application/json; Charset=UTF-8",
      },
    });
    const todo = await res.json();
    console.log(todo);

    dispatch(added(todo.title));
  };
};
export default fetchTodos;
