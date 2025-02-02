import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);
  // const handleUp = () => {
  //   setCount(count + 1);
  // };

  // const [count, setCount] = useState(0);
  // const handleUp = () => {
  //   setCount(pre => pre+1);
  //   setCount(pre => pre+1);
  //   setCount(pre => pre+1);
  // };

  const [name, setName] = useState({
    name: "Nguyen Van a",
    age: 20,
    address: "Ha Noi",
  });
  const handleUp = () => {
    setName({
      ...name,
      bio: "Yeu mau hong",
    });
  };
  return (
    <div className="App">
      {/* <h1>{count}</h1> */}
      <h1>{JSON.stringify(name)}</h1>
      <button onClick={handleUp}>Update</button>
    </div>
  );
}

export default App;
