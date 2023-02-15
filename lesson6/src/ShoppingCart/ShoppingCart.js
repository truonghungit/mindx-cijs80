// import { useState } from "react";

export const ShoppingCart = (props) => {
  // const [cartProducts, setCartProducts] = useState([]);

  return (
    <div>
      <h3>Shopping cart </h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {props.cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>500</td>
              <td>1000</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
