import { useState, useEffect } from "react";

import { Users } from "./Components/Users";
import { Timer } from "./Components/Timer";

const ClickDocument = () => {
  useEffect(() => {
    const handleClickOnDocument = () => {
      console.log("handle click on document ");
    };

    console.log("addEventListener");
    document.addEventListener("click", handleClickOnDocument);

    const cleanUpFn = () => {
      console.log("remove event listener");
      document.removeEventListener("click", handleClickOnDocument);
    };

    return cleanUpFn;
  }, []);

  return <h1>Click me</h1>;
};

function App() {
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(true);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log("update title with no dependencies");
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
    // Update the document title using the browser API
    console.log("update title with empty dependencies");
    document.title = `You clicked ${count} times`;
  }, []);

  useEffect(() => {
    // Update the document title using the browser API
    console.log("update title with dependencies");
    document.title = `You clicked ${count} times`;
  }, [isShow, count]);

  console.log("Render");

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("i fire once");
  }, []);

  return (
    <div className="container mt-5">
      <div>
        <h1>Timer</h1>
        <Timer />
      </div>
      <h1>You clicked {count} times</h1>
      <button className="btn btn-primary" onClick={handleClick}>
        Click me
      </button>
      <div className="mt-4">
        <button className="btn btn-primary" onClick={() => setIsShow(!isShow)}>
          Show/Hide
        </button>
      </div>

      {isShow && <ClickDocument />}

      <div>
        <h3>User list</h3>
        <Users />
      </div>
    </div>
  );
}

export default App;
