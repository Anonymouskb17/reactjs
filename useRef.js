// truyền một gia trị thông qua một tham số khác

// import { useRef, useState, useEffect } from "react";

// function Content() {
//   const [count, setCount] = useState(60);

//   const timeId = useRef();
//   const prev = useRef();
//   const num = useRef();

//   useEffect(() => {
//     console.log(num.current);
//     const dire = num.current.getBoundingClientRect();
//     console.log(dire);
//   }, []);

//   const handleStart = () => {
//     timeId.current = setInterval(() => {
//       setCount((prev) => prev - 1);
//     }, 1000);
//     console.log(timeId.current);
//   };
//   const handleStop = () => {
//     clearInterval(timeId.current);
//     console.log(timeId.current);
//   };

//   useEffect(() => {
//     setCount((prev.current = count));
//   }, [count]);
//   console.log(count, prev.current);

//   return (
//     <div>
//       <h1 ref={num}>Count: {count}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </div>
//   );
// }
