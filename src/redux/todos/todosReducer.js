import initialState from "./initialState";
import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes";

const nextTodoId = (elements) => {
  const nextId = elements.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
  return nextId + 1;
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(),
          title: action.payload,
        },
      ];

    case TOGGLED:
      const toggleData = state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            complated: !todo.complated,
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
          complated: true,
        };
      });

    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.complated);

    default:
      return state;
  }
};

export default todosReducer;
