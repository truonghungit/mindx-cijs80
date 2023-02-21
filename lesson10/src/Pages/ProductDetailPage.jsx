import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const params = useParams();

  console.log("params", params);

  return <h1>Product detail page {params.productId}</h1>;
}
