import { useSearchParams } from "react-router-dom";

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log("searchParams", searchParams.get("sortBy"));

  const sortBy = searchParams.get("sortBy");
  const queryValue = searchParams.get("q");

  // Call API get danh sách product dựa theo query queryValue, sort sortBy

  return (
    <>
      <h1>Product list page</h1>
    </>
  );
}
