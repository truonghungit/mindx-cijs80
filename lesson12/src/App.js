import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";

import UserForm from "./UserForm";
import Counter from "./Counter";
import { NormalCard, MemoizedCard } from "./UserCard";

function App() {
  // const inputRef = useRef(5);

  // const handleFocus = () => {
  //   if (inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // };

  // useEffect(() => {
  //   handleFocus();
  // });

  // const [value, setValue] = useState({ name: "MindX", age: 20 });

  // const updateValue = () => {
  //   setValue({ name: "MindX", age: 20 });
  // };

  // const updateName = () => {
  //   setValue({ ...value, name: value.name + "x" });
  // };

  // const increaseAge = () => {
  //   setValue({ ...value, age: value.age + 1 });
  // };

  // const [items, setItems] = useState([1, 2, 3]);
  // const [visible, setVisible] = useState(true);

  // const doubleItems = items.map((item) => item * 2);

  // const memoizedDoubleItems = useMemo(() => {
  //   return items.map((item) => item * 2);
  // }, [items]);

  // const changeVisible = () => {
  //   setVisible(!visible);
  // };
  // const addValue = () => {
  //   setItems([...items, 1]);
  // };

  // useEffect(() => {
  //   console.log("doubleItems changed");
  // }, [doubleItems]);

  // useEffect(() => {
  //   console.log("memoizedDoubleItems changed");
  // }, [memoizedDoubleItems]);

  const [user, setUser] = useState(null);

  const fetchData = useCallback(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((resJson) => {
        setUser(resJson.results[0]);
      });
  }, []);

  const fetchDataWithoutUseCallback = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((resJson) => {
        setUser(resJson.results[0]);
      });
  };

  useEffect(() => {
    console.log("fetch data");
    fetchDataWithoutUseCallback();
  }, []);

  return (
    <div className="container pt-5">
      {/* <UserForm ref={inputRef} /> */}

      {/* <Counter /> */}

      {/* <button className="btn btn-primary" onClick={updateValue}>
        Change value
      </button>
      <button className="btn btn-primary" onClick={updateName}>
        Change name
      </button>
      <button className="btn btn-primary" onClick={increaseAge}>
        Increase age
      </button>
      <NormalCard name={value.name} age={value.age} />
      <MemoizedCard name={value.name} age={value.age} /> */}

      {/* <button className="btn btn-primary" onClick={changeVisible}>
        Change visible
      </button>
      <button className="btn btn-primary" onClick={addValue}>
        Add value
      </button>
      {visible && (
        <div>
          <p>{items}</p>
          <p>{doubleItems}</p>
          <p>{memoizedDoubleItems}</p>
        </div>
      )} */}

      <button onClick={fetchDataWithoutUseCallback}>Refresh</button>
      {user ? (
        <div>
          <img src={user.picture.medium} alt="" />
          <p>
            {user.name.first} {user.name.last}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default App;
