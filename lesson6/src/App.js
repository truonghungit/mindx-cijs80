import "./App.css";
import React, { useState } from "react";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";
import { NameCard } from "./NameCard/NameCard";
import { Products } from "./Products/Products";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";

function App() {
  const [bob, setBob] = useState({ name: "Bob", age: 20 });

  const [cartItems, setCartItems] = useState([]);

  const handleIncreaseAge = (data) => {
    console.log("handleIncreaseAge", data);

    setBob((pre) => ({ ...pre, age: pre.age + 1 }));
  };

  const handleAddToCart = (product) => {
    console.log("product", product);
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index >= 0) {
      cartItems[index].quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }
    // const items = [...cartItems, product];
    console.log(cartItems);
    setCartItems(Array.from(cartItems));
    setCartItems([...cartItems]);
  };

  return (
    <div className="container">
      <Register />
      {/* <NameCard
        name={bob.name}
        age={bob.age}
        onIncreaseAge={handleIncreaseAge}
      /> */}
      {/* <Login /> */}

      {/* <div className="d-flex ">
        <div className="flex-shrink-0 w-50">
          <Products addToCart={handleAddToCart} />
        </div>
        <div className="ml-4 flex-shrink-0 w-50 ps-5">
          <ShoppingCart cartItems={cartItems} />
        </div>
      </div> */}
    </div>
  );
}

export default App;
