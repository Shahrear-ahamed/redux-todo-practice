import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import Todo from "./Todo";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const { status, colors } = filters;

  useEffect(() => {
    dispatch(fetchTodos);
  }, []);

  // filter seaction are here
  const filterByStatus = (todo) => {
    switch (status) {
      case "Complete":
        return todo.completed;

      case "Incomplete":
        return !todo.completed;

      default:
        return true;
    }
  };

  const filterByColors = (todo) => {
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos.length > 0 ? (
        todos
          .filter(filterByStatus)
          .filter(filterByColors)
          .map((todo) => <Todo key={todo.id} todo={todo} />)
      ) : (
        <h2 className="text-center font-semibold text-red-400 select-none">
          Nothing to show here
        </h2>
      )}
    </div>
  );
}
