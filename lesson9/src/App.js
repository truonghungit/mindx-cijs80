import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");

function LoginForm() {
  return (
    <div>
      <h3>Login Form</h3>
    </div>
  );
}

function Login() {
  const { theme } = useContext(ThemeContext);
  console.log("Login context", theme);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ddd" : "#111",
      }}
      className="p-5 border border-3 border-primary"
    >
      <h3>Login component</h3>
      <LoginForm />
    </div>
  );
}
function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const switchThemeMode = () => {
    console.log("Switch theme: ", theme);
    toggleTheme();
  };

  return (
    <div className="mt-3 p-5 border border-3 border-info">
      <h3>Footer</h3>

      <button type="button" className="btn btn-info" onClick={switchThemeMode}>
        Switch to {theme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
}

function Filter() {
  return (
    <div>
      <h3>Filter</h3>
    </div>
  );
}
function ProductItem() {
  return (
    <div>
      <h3>ProductItem</h3>
    </div>
  );
}
function ProductList() {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div
        style={{
          backgroundColor: theme === "light" ? "#ddd" : "#111",
        }}
      >
        <h3>ProductList</h3>

        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="p-5 border border-3 border-success flex-grow-1">
      <h3>Home</h3>
      <Filter />
      <ProductList />
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  console.log("theme: ", theme);

  return (
    <div>
      <Login />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="container">
          <div className="d-flex">
            <Home />
          </div>

          <Footer />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
