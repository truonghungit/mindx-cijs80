import "./App.css";
import React, { useState } from "react";

import { Hobbies } from "./Components/Hobbies";
import { Users } from "./Components/Users";

const arr = [1, 2, 3];

// MAP
const newArr = arr.map((item, index, arrayValue) => {
  console.log(item, index, arrayValue);
  if (item % 2 === 0) {
    return item * 2;
  }
  return item;
});

console.log("newArr", newArr); // [2, 4, 6]

// FOR EACH
const newArray = [];
arr.forEach((item) => {
  if (item % 2 === 0) {
    newArray.push(item * 2);
  } else {
    newArray.push(item);
  }
});
console.log("newArray", newArray); // [2, 4, 6]

// FILTER

const filteredItems = arr.filter((item) => {
  return item % 2 === 0;
});

const newArr2 = arr.push(10);

console.log("newArr2", newArr2); // [2]
console.log(arr); // [1, 2, 3]

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = undefined;
  // {
  //   id: 1,
  //   name: "Leanne Graham",
  //   username: "Bret",
  //   email: "Sincere@april.biz",
  // };

  return (
    <div className="container">
      <h2>
        Xin chào:
        <span>{user && user.email}</span>
      </h2>
      <h2>
        Xin chào 3:
        <span>{user && user.email}</span>
      </h2>
      <h2>
        Xin chào 2:
        <span>{user && user.email}</span>
      </h2>
      <h2>
        Xin chào 3:
        <span>{user && user.email}</span>
      </h2>

      {isLoggedIn ? (
        <div className={`p-3 ${user ? "bg-info" : ""}`}>
          <h2>
            Xin chào:
            <span>{user && user.email}</span>
          </h2>

          <button
            className="btn btn-primary"
            onClick={() => setIsLoggedIn(false)}
          >
            logout
          </button>
        </div>
      ) : (
        <div>
          <h2>Mời bạn Login</h2>

          <button
            className="btn btn-primary"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
