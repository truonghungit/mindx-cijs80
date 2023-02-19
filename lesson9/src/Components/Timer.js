import { useState, useEffect } from "react";

export const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("update count");
      setCount((preValue) => preValue + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <h1>{count}</h1>;
};
