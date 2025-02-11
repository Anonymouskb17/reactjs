// tương tự như useState
// nếu useState sử dụng được thì useReducer cũng sử dụng được
// useReducer sẽ giúp đơn giản hơn
// tạo reducer (là 1 một hàm)
// dispatch kích hoạt action

// import { useState, useReducer } from "react";
// import Content from "./Content";

// const initState = 0;

// const Up_State = "up";
// const Down_State = "down";

// const reducer = (state, action) => {
//   switch (action) {
//     case Up_State:
//       return state + 1;
//     case Down_State:
//       return state - 1;
//     default:
//       throw new Error("not active");
//   }
// };

// function App() {
//   const [count, dispatch] = useReducer(reducer, initState);

//   return (
//     <div style={{ padding: 20 }}>
//       {count}
//       <br></br>
//       <button onClick={() => dispatch(Down_State)}>Down</button>
//       <button onClick={() => dispatch(Up_State)}>Up</button>
//     </div>
//   );
// }

//useReducer with todo app
// import { useRef, useReducer } from "react";
// import Content from "./Content";

// const initState = {
//   job: "",
//   jobs: [],
// };

// const setJob = "setJob";
// const addJob = "addJob";
// const deleteJob = "deleteJob";

// const setjobAction = (payload) => {
//   return {
//     type: setJob,
//     payload,
//   };
// };

// const addjobAction = (payload) => {
//   return {
//     type: addJob,
//     payload,
//   };
// };

// const deletejobAction = (payload) => {
//   return {
//     type: deleteJob,
//     payload,
//   };
// };

// const reducer = (state, action) => {
//   let newState;
//   switch (action.type) {
//     case setJob:
//       newState = {
//         ...state,
//         job: action.payload,
//       };
//       break;
//     case addJob:
//       newState = {
//         ...state,
//         jobs: [...state.jobs, action.payload],
//       };
//       break;
//     case deleteJob:
//       const newJobs = [...state.jobs];
//       newJobs.splice(action.payload, 1);
//       newState = {
//         ...state,
//         jobs: newJobs,
//       };

//       break;

//     default:
//       throw new Error("not active");
//   }
//   console.log("newState", newState);

//   return newState;
// };

// function App() {
//   const [state, dispatch] = useReducer(reducer, initState);
//   const inputRef = useRef();
//   const { job, jobs } = state;
//   const handleSubmit = () => {
//     dispatch(addjobAction(job));
//     dispatch(setjobAction(""));
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       Todo <br></br>
//       <input
//         ref={inputRef}
//         value={job}
//         onChange={(e) => dispatch(setjobAction(e.target.value))}
//         placeholder="Enter Todo..."
//       />
//       <br></br>
//       <button onClick={handleSubmit}>Add</button>
//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>
//             {job}
//             <span onClick={() => dispatch(deletejobAction(index))}>
//               &times;
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

//hàm log
// function Logger(reducer) {
//     return (preState, action) => {
//       console.group(action.type); // in nhóm ra các trường hợp action
//       console.log(preState);
//       console.log(action);

//       const newState = reducer(preState, action);

//       console.groupEnd(); // kết thúc in nhóm

//       return newState;
//     };
//   }

//   export default Logger;
