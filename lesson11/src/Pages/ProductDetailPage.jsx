import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductDetailPage() {
  const params = useParams();

  console.log("params", params);

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleRemove = () => {
    axios
      .delete(`http://localhost:9000/products/${params.productId}`)
      .then((response) => {
        alert("Delete product successfully");
      });
  };

  const handleUpdate = () => {
    const updateProduct = { ...product, updatedDate: new Date().toISOString() };
    axios
      .put(`http://localhost:9000/products/${params.productId}`, updateProduct)
      .then((response) => {
        alert("Update product successfully");
      });
  };

  const getProductDetailById = (id) => {
    setIsLoading(true);
    axios
      .get(`http://localhost:9000/products/${id}`)
      .then((response) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(response);
          }, 2000);
        });
      })
      .then((response) => {
        setProduct(response.data);
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

  useEffect(() => {
    getProductDetailById(params.productId);
  }, [params]);

  return (
    <div>
      <h1>Product detail page {params.productId}</h1>
      <button onClick={handleRemove}>Remove</button>

      <div>
        {product && (
          <div>
            <input
              type="text"
              value={product.name}
              onChange={(event) =>
                setProduct({ ...product, name: event.target.value })
              }
            />
            <button onClick={handleUpdate}>Update</button>
          </div>
        )}
      </div>
    </div>
  );
}
