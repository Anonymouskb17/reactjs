import { SetTodo, AddTodo } from "./constant";

export const SettodoInput = (payload) => {
  return {
    type: SetTodo,
    payload,
  };
};
export const AddTodoInput = (payload) => {
  return {
    type: AddTodo,
    payload,
  };
};
