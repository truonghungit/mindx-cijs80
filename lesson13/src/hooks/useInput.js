import { useState } from "react";

const useInput = (initValue) => {
  const [value, setValue] = useState(initValue ? initValue : "");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return [value, onChange];
};

export default useInput;
