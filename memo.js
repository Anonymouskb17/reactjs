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

// useMemo là để tránh thực hiện một logic nào đó không cần thiết

// import { useState, useMemo, useRef } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState();
//   const [products, setProducts] = useState([]);
//   const fo = useRef();

//   const total = useMemo(() => {
//     const result = products.reduce((sum, product) => {
//       return sum + product.price;
//     }, 0);
//     return result;
//   }, [products]);

//   const handleAddProcduct = () => {
//     setProducts([...products, { name, price: Number(price) }]);
//     setName("");
//     setPrice("");
//   };
//   return (
//     <div style={{ padding: 20 }}>
//       <input
//         ref={fo}
//         placeholder="Name products..."
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       ></input>
//       <br></br>
//       <input
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//         placeholder="Price products..."
//       ></input>
//       <br></br>
//       <button onClick={handleAddProcduct}>Add</button>
//       Total: {total}
//       {products.map((product, index) => (
//         <li key={index}>
//           {product.name}- {product.price}
//         </li>
//       ))}
//     </div>
//   );
// }
