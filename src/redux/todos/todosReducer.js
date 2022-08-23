import initialState from "./initialState";
import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  LOADED,
  TOGGLED,
} from "./actionTypes";

const nextTodoId = (elements) => {
  const nextId = elements.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
  return nextId + 1;
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;

    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          title: action.payload,
          completed: false,
        },
      ];

    case TOGGLED:
      const toggleData = state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return toggleData;

    case COLORSELECTED:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            color: color,
          };
        }
        return todo;
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default todosReducer;
