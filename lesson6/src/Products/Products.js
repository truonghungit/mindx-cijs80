import { useState } from "react";

export const Products = (props) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product A",
    },
    {
      id: 2,
      name: "Product B",
    },
    {
      id: 3,
      name: "ProductC",
    },
  ]);

  const addToCart = (product) => {
    console.log(product);
    props.addToCart(product);
  };

  return (
    <div>
      <h3>Products </h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products &&
          products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card">
                <img
                  src="https://antien.vn/uploaded/B%26O%20Beoplay%20H95/tai-nghe-chong-on-b-o-beoplay-h95-gold.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(product)}
                  >
                    Add to card
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
