import { useState } from "react";

function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storage = JSON.parse(localStorage.getItem("jobs")) || [];
    return storage;
  });

  // const handleClick = () => {
  //   setJobs((prev) => [...prev, job]);
  //   setJob("");
  // };

  const handleClick = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      // save to storage
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
    setJob("");
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      {/* <h1>{count}</h1> */}
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleClick}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
