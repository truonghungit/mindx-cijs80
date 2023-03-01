import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  navigate("/login");

  return <h1>Home page</h1>;
}
