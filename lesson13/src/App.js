import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

import useInput from "./hooks/useInput";
import useCheckbox from "./hooks/useCheckbox";
import useHover from "./hooks/useHover";
import useAbc from "./hooks/useDebouce";

import { NameCardClass, NameCardFn } from "./Components/NameCard";
import { CounterClass, CounterFn } from "./Components/Counter";
import { ThemeContext } from "./ThemeContext";
import { ErrorBoundary } from "./Components/ErrorBoundary";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  const [userName, setUserName] = useInput();
  // const passwordInput = useInput();

  // const { checked: rememberMe, onChange: setRememberMe } =
  //   useCheckbox("checked");

  // const [input1, setInput1] = useState("");
  // const [input2, setInput2] = useState("");

  // const onChangeInput1 = (event) => {
  //   setInput1(event.target.value);
  // };

  // const onChangeInput2 = (event) => {
  //   setInput2(event.target.value);
  // };

  // const [show, setShow] = useState(true);
  // const [isHoveredOnBox, boxElementRef] = useHover();

  // console.log("isHoveredOnBox", isHoveredOnBox);

  console.log("ussername ", userName);

  const deboucedUserName = useAbc(userName, 2000);
  console.log("deboucedUserName ", deboucedUserName);

  useEffect(() => {
    // call api de kiem tra username co ton tai trong he thong hay không
    // neu ton tai thì bao invalid
    console.log("call api");
  }, [deboucedUserName]);

  return (
    <div className="">
      <HomePage />
      {/* <ErrorBoundary>
        <ThemeContext.Provider value="dark">
          <NameCardClass name="Lan" age="20" />
          <hr />
          <NameCardFn name="Lan" age="20" />
          <CounterClass initValue={5} />
          <hr />
          counter function
          <CounterFn initValue={5} />
        </ThemeContext.Provider>
      </ErrorBoundary> */}
      {/* {show && (
        <div
          className="box"
          style={{
            background: isHoveredOnBox ? "red" : "#61dafb",
          }}
          ref={boxElementRef}
        >
          BOX
        </div>
      )}

      <button onClick={() => setShow(!show)}>Show </button> */}
      {/* <div>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={setUserName}
        />
      </div> */}
      {/* <div>
        <input
          type="text"
          placeholder="password"
          value={passwordInput.value}
          onChange={passwordInput.onChange}
        />
      </div>

      <div>
        <input
          id="rememberme"
          type="checkbox"
          checked={rememberMe}
          onChange={setRememberMe}
        />
        <label htmlFor="rememberme">Remember me</label>
      </div> */}
    </div>
  );
}

export default App;
