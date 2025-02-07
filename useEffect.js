import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];
function Content() {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState([]);
  const [type, setType] = useState("posts");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [type]);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          style={tab === type ? { backgroundColor: "red", color: "white" } : {}}
          onClick={() => setType(tab)}
          key={tab}
        >
          {tab}
        </button>
      ))}

      <ul>
        {post.map((item) => (
          <li key={item.id}>{item.title || item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Content;

// useEffect({}) sẽ được gọi lại mỗi lần re-render
// gọi callback sau khi thêm element vào dom
// UseEffect((callback),[]) sẽ chỉ gọi 1 lần duy nhất sau khi được mounted
// useEffect((callback),[dependencies]) sẽ gọi lại mỗi khi dependencies thay đổi

// callback sẽ được gọi sau mối khi component mounted
// Clean up sẽ được gọi trước khi component unmounted

//scroll

// const [tab, setTab] = useState("");
// const [type, setType] = useState("posts");
// const [data, setData] = useState([]);

// const [showGototop, setShowGototop] = useState(false);

// useEffect(() => {
//   fetch(`https://jsonplaceholder.typicode.com/${type}`)
//     .then((response) => response.json())
//     .then((data) => setData(data));
// }, [type]);

// useEffect(() => {
//   const handleScroll = () => {
//     if (window.scrollY >= 200) {
//       setShowGototop(true);
//     } else {
//       setShowGototop(false);
//     }
//   };
//   window.addEventListener("scroll", handleScroll);
//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);
// return (
//   <div>
//     {tabs.map((item) => (
//       <button key={item} onClick={() => setType(item)}>
//         {item}
//       </button>
//     ))}
//     <ul>
//       {data.map((item) => (
//         <li key={item.id}>{item.title || item.name}</li>
//       ))}
//     </ul>

//     {showGototop && (
//       <button style={{ right: 20, bottom: 20, position: "fixed" }}>
//         Go to top
//       </button>
//     )}
//   </div>
// );

//size
// function Content() {
//   const [size, setSize] = useState(window.innerWidth);
//   useEffect(() => {
//     const handleResize = () => setSize(window.innerWidth);
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div>
//       <h1>Window Size: {size}px</h1>
//     </div>
//   );
// }

// // countdown
// import { useEffect, useState } from "react";

// function Content() {
//   const [count, setCount] = useState(180);

//   useEffect(() => {
//     const setCountid = setInterval(() => {
//       setCount((preState) => preState - 1);
//     }, 1000);

//     return () => clearInterval(setCountid);
//   }, []);

//   return (
//     <div>
//       <h1>{count}</h1>
//     </div>
//   );
// }

// preview avatar
// import { useEffect, useState } from "react";

// function Content() {
//   const [avatar, setAvatar] = useState([]);

//   useEffect(() => {
//     return () => {
//       URL.revokeObjectURL(avatar.preview);
//     };
//   }, [avatar]);

//   const handleAvatar = (e) => {
//     const file = e.target.files[0];
//     file.preview = URL.createObjectURL(file);
//     setAvatar(file);
//   };

// chọn nhiều lần trên cùng một ảnh
// e.targer.value = null

//   return (
//     <div>
//       <input type="file" onChange={handleAvatar} click />
//       {avatar && <img src={avatar.preview} alt="" />}
//     </div>
//   );
// }

// clean up nó sẽ được gọi trước callback trừ khi mounted

// fake chat
// function emitComment(id) {
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`lesson${id}`, {
//         detail: `Noi dung comment cua ${id}`,
//       })
//     );
//   }, 2000);
// }

// emitComment(1);
// emitComment(2);
// emitComment(3);

// const lessons = [
//   { id: 1, name: "Lesson 1" },
//   { id: 2, name: "Lesson 2" },
//   { id: 3, name: "Lesson 3" },
// ];

// const [lesson, setLesson] = useState(1);

// useEffect(() => {
//   const handleCommit = (e) => {
//     console.log(e);
//   };
//   window.addEventListener(`lesson${lesson}`, handleCommit);

//   return () => {
//     window.removeEventListener(`lesson${lesson}`, handleCommit);
//   };
// }, [lesson]);
// return (
//   <div>
//     {lessons.map((item) => (
//       <li
//         key={item.id}
//         style={{ color: item.id === lesson ? "red" : "black" }}
//         onClick={() => setLesson(item.id)}
//       >
//         {item.name}
//       </li>
//     ))}
