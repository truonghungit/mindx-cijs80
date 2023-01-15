import logo from "./logo.svg";
import "./App.css";

function HeaderComponent() {
  return (
    <>
      <div>JSX</div>
      <div>JSX</div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <h1>Hello anh em!</h1>
    </div>
  );
}

export default App;
