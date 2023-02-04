import "./App.css";
import React, { useState } from "react";
import { Login } from "./Login/Login";

const Student = () => {
  const [students, setStudents] = useState(["Nam", "Minh"]);

  const onUpdate = () => {
    // student.name = "Thuy Linh";

    // console.log(student);
    // students.push("Linh");
    setStudents((preValue) => {
      console.log("prevalue ", preValue);
      return [...students, "Linh"];
    });
  };

  return (
    <div>
      {/* <div>Name: {student.name}</div>
      <div>Email: {student.email}</div> */}
      {students}

      <div>
        <button className="btn btn-primary" onClick={onUpdate}>
          update
        </button>
      </div>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div className="h1">{count}</div>
      <button className="btn btn-primary" onClick={onIncrease}>
        Increase
      </button>
    </div>
  );
};

function App() {
  // function handleClick(event) {
  //   console.log("handle click ", event);
  // }

  // const handleClick = (event, p1, p2) => {
  //   console.log("handle click ", event, p1, p2);
  //   console.log("Xử lý logic ở đây ");
  // };

  // const [amount, setAmount] = React.useState(10);

  // const handleIncrease = (event) => {
  //   setAmount(amount + 1);
  // };

  return (
    <div className="container">
      <Login />

      <Student />

      <div className="mt-4">
        {/* <button className="btn btn-info" onClick={handleClick}>
          Click Me
        </button>
        <button
          className="btn btn-info"
          onClick={function () {
            console.log("Hello");
          }}
        >
          Click Me 2
        </button>
        <button
          className="btn btn-info"
          onClick={() => {
            console.log("Hello");
            // logic
          }}
        >
          Click Me 3
        </button>
        <button
          className="btn btn-info"
          onClick={(event) => handleClick(event, "p1", "p2")}
        >
          Click Me 4
        </button> */}
      </div>

      <div className="mt-4">
        <Counter />
        <Counter />
        <Counter />
      </div>
    </div>
  );
}

export default App;
