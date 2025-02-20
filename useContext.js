// context trong react là để đơn giản hóa việc truyền props từ component cha sang component con
//with context
//1. create context tạo ra phạm vi truyền dữ liệu của một component
//2. provider đây là để nhận dữ liệu từ component
//3. consumer để nhận được dữ liệu từ component con sang cha

// import TodoApp from "./Todo/index.js";
// import Content from "./Content.js";
// import "./App.css";
// import { ThemeContext } from "./ThemeContext.js";
// import { useContext } from "react";
// function App() {
//   const contexxt = useContext(ThemeContext);
//   return (
//     <div style={{ padding: 20 }}>
//       <button onClick={contexxt.hanleSubmit}>Change themes</button>
//       <Content />
//     </div>
//   );
// }

// export default App;

// import { useState, useContext, createContext } from "react";

// const ThemeContext = createContext();

// function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState("dark");
//   const hanleSubmit = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };
//   const value = {
//     theme,
//     hanleSubmit,
//   };
//   return (
//     <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
//   );
// }

// export { ThemeProvider, ThemeContext };

// import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext.js";

// function Pararaph() {
//   const context = useContext(ThemeContext);

//   return <div className={context.theme}>Conten with me</div>;
// }
// export default Pararaph;
