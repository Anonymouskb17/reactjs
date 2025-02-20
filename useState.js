import { useState } from "react";

// const gifts =['laboghini','ferreri', 'bmw']

//const [values, setValues] = useState(initValues);
// values là giá trị
// setValues là hàm để thay đổi giá trị của values
// initValues là giá trị ban đầu của values
const courses = [
  {
    id: 1,
    name: "Reactjs",
    price: 200,
  },
  {
    id: 2,
    name: "Angular",
    price: 300,
  },
  {
    id: 3,
    name: "Vuejs",
    price: 400,
  },
];

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

  // const [gift, setGift] = useState();
  // const handleSelectGift = () => {
  //   const randomIndex = Math.floor(Math.random() * gifts.length);
  //   setGift(gifts[randomIndex]);
  // };

  // const handleClick = (id) => {
  //   setChecked((prev) => {
  //     const isChecked = checked.includes(id);
  //     if (isChecked) {
  //       return checked.filter((item) => item !== id);
  //     } else {
  //       return [...prev, id];
  //     }
  //   });
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

      {/* usestate với radio
       {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            name="couse"
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          ></input>
          {course.name} - {course.price}
        </div>
      ))}
      <button>Submit</button> */}

      {/* {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleClick(course.id)}
          ></input>
          {course.name} - {course.price}
        </div>
      ))}
      <button>Submit</button> */}
    </div>
  );
}

export default App;
