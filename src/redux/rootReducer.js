import todosReducer from "./todos/todosReducer";
import filterReducer from "./filters/filterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filterReducer,
});
export default rootReducer;
