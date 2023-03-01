import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

import { useAuth } from "../AuthContext";

const initCredential = { email: "", password: "" };

export default function LoginPage() {
  const [credential, setCredential] = useState(initCredential);
  const navigate = useNavigate();

  const { setAuth } = useAuth();

  const handleInputChange = (event) => {
    setCredential({
      ...credential,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // TODO: call API để login
    setAuth({ email: credential.email });
    navigate("/");
  };

  return (
    <div className="login-form m-auto">
      <form onSubmit={handleFormSubmit}>
        <img
          className="mb-4 logo"
          src="https://mindx.vn/images/logo.png"
          alt=""
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={credential.email}
            name="email"
            onChange={handleInputChange}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mt-4">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={credential.password}
            name="password"
            onChange={handleInputChange}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="mt-4 w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}
