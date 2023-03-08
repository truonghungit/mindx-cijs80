import { useEffect, useState } from "react";

export default function useDebouce(initValue, delay) {
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    const id = setTimeout(() => {
      setValue(initValue);
    }, delay || 400);

    return () => {
      clearTimeout(id);
    };
  }, [initValue, delay]);

  return value;
}
