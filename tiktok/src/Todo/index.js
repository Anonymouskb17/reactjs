import { useReducer } from "react";
import reducer, { initState } from "./reducer";
import { SetJobAction, AddJobAction, DeleteJobAction } from "./action.js";
import Log from "./logger.js";
function App() {
  const [state, dispatch] = useReducer(Log(reducer), initState);
  const { job, jobs } = state;
  const handleSubmit = () => {
    dispatch(AddJobAction(job));
    dispatch(SetJobAction(""));
  };
  return (
    <>
      Todo App
      <br></br>
      <input
        value={job}
        placeholder="Nhập vào đây..."
        onChange={(e) => dispatch(SetJobAction(e.target.value))}
      ></input>
      <br></br>
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(DeleteJobAction(index))}>
              &times;
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
