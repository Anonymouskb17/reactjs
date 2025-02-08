// nếu sử dụng memo thì sử dụng useCallback để tránh trường hợp nếu bị re-render
// useCallback sẽ trả lại đúng tham chiều ban đầu khởi tạo của nó
// import { useCallback, useState, useEffect } from "react";

// function Content() {
//   const [count, setCount] = useState(0);

//   const increase = useCallback(() => {
//     setCount(count + 1);
//   });

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increase}>Increase</button>
//     </div>
//   );
// }
