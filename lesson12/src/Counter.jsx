import { useRef, useState } from "react";

export default function Counter() {
  let count = 0;
  const countRef = useRef(0);
  const [countState, setCountState] = useState(0);

  const increase = () => {
    count++;
  };

  const increaseRef = () => {
    countRef.current++;
  };

  const increaseState = () => {
    setCountState(countState + 1);
  };

  console.log("count: ", count);
  console.log("countRef: ", countRef.current);
  console.log("countState", countState);

  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button className="btn btn-primary" onClick={increase}>
          Increase Count
        </button>
      </div>
      <div>
        <h1>{countRef.current}</h1>
        <button className="btn btn-primary" onClick={increaseRef}>
          Increase CountRef
        </button>
      </div>
      <div>
        <h1>{countState}</h1>
        <button className="btn btn-primary" onClick={increaseState}>
          Increase CountState
        </button>
      </div>
    </div>
  );
}
