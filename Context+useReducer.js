// import { useStore, actions } from "./store";
// import logger from "./store/logger";
// import reducer, { innitState } from "./store/reducer";
// import { useRef } from "react";
// function App() {
//   const [state, dispatch] = useStore(logger(reducer), innitState);

//   const { todos, todoInput } = state;

//   const handleAdd = () => {
//     dispatch(actions.AddTodoInput(todoInput));
//   };
//   console.log(todos);

//   return (
//     <div style={{ padding: 20 }}>
//       Hello Ae
//       <input

//         value={todoInput}
//         placeholder="Nhập..."
//         onChange={(e) => {
//           dispatch(actions.SettodoInput(e.target.value));
//         }}
//       />
//       <button onClick={handleAdd}>Add</button>
//       {todos.map((todo, index) => (
//         <li key={index}>{todo}</li>
//       ))}
//     </div>
//   );
// }

// export default App;

// import { SetTodo, AddTodo } from "./constant";

// export const SettodoInput = (payload) => {
//   return {
//     type: SetTodo,
//     payload,
//   };
// };
// export const AddTodoInput = (payload) => {
//   return {
//     type: AddTodo,
//     payload,
//   };
// };

// export const SetTodo = "SetTodo";
// export const AddTodo = "AddTodo";

// import { createContext } from "react";

// const Context = createContext();

// export default Context;

// import { useContext } from "react";
// import Context from "./Context";

// export const useStore = () => {
//   const [state, dispatch] = useContext(Context);
//   return [state, dispatch];
// };

// export { default as StoreProvider } from "./Provider";
// export { default as StoreContext } from "./Context";
// export * from "./hooks";

// export * as actions from "./action";

// function logger(reducer) {
//     return (preState, action) => {
//       const nextState = reducer(preState, action);
//       return nextState;
//     };
//   }

//   export default logger;

//   import Context from "./Context";
// import { useReducer } from "react";
// import reducer, { innitState } from "./reducer";

// function Provider({ children }) {
//   const [state, dispatch] = useReducer(reducer, innitState);
//   return (
//     <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
//   );
// }

// export default Provider;

// import { SetTodo, AddTodo } from "./constant";
// const innitState = {
//   todos: [],
//   todoInput: "",
// };
// function reducer(state, action) {
//   switch (action.type) {
//     case SetTodo:
//       return {
//         ...state,
//         todoInput: action.payload,
//       };

//     case AddTodo:
//       return {
//         ...state,
//         todos: [...state.todos, action.payload],
//       };

//     default:
//       throw new Error("invalid");
//   }
// }

// export default reducer;
// export { innitState };
