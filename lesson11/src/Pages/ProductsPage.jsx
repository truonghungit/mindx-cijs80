import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProducts = () => {
    setIsLoading(true);
    axios
      .get("http://localhost:9000/products")
      .then((response) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(response);
          }, 1000);
        });
      })
      .then((response) => {
        console.log("response", response);
        setProducts(response.data);
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
    getProducts();
  }, []);

  // Call API get danh sách product dựa theo query queryValue, sort sortBy

  return (
    <>
      <h1>Product list page</h1>

      {error ? (
        <p>{error}</p>
      ) : (
        <>
          {products && products.length === 0 ? (
            <>{isLoading ? <div>Loading ...</div> : <div>No Data </div>}</>
          ) : (
            <div>
              {products.map((product) => (
                <div key={product.id}>
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
