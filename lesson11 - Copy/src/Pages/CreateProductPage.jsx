import { useState, useEffect } from "react";
import axios from "axios";

export default function CreateProductPage() {
  const [productName, setProductName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleAddNew = (id) => {
    const product = {
      name: productName,
      size: "XXL",
    };
    setIsLoading(true);

    axios
      .post(`http://localhost:9000/products`, product)
      .then((response) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(response);
          }, 1000);
        });
      })
      .then(() => {
        alert("Create new product successfully");
        setError(null);
      })
      .catch((error) => {
        console.log("error", error);
        setError("some thing went wrong, please try again");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h1>Create Product</h1>

      <div>
        <input
          type="text"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
        />

        <button onClick={handleAddNew}>Create new</button>
      </div>
    </div>
  );
}
