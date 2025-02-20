import { SetTodo, AddTodo } from "./constant";
const innitState = {
  todos: [],
  todoInput: "",
};
function reducer(state, action) {
  switch (action.type) {
    case SetTodo:
      return {
        ...state,
        todoInput: action.payload,
      };

    case AddTodo:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    default:
      throw new Error("invalid");
  }
}

export default reducer;
export { innitState };
