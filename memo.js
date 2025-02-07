// higher order components
// memo là lưu bộ nhớ thì sẽ kiểm tra trong 1 component chỉ cẩn 1 prop thay đổi thì nó sẽ render lại

// import React from "react";

// function Content() {
//     const [count, setCount] = React.useState(0);

//     const increase = () => {
//         setCount(count + 1);
//     }
//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={increase}>Increase</button>
//         </div>
//     )
// }
// export default React.memo(Content);
