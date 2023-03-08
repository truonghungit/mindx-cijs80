import { useState } from "react";

const useCheckbox = (initValue) => {
  const [checked, setChecked] = useState(Boolean(initValue));

  const onChange = (event) => {
    setChecked(event.target.checked);
  };

  return { checked, onChange };
};

export default useCheckbox;
