import { useState } from "react";
import "./Login.css";

const initCredential = { email: "", password: "" };
const initError = { email: null, password: null };

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Refactor code

  const [credential, setCredential] = useState(initCredential);
  const [error, setError] = useState(initError);
  const [wasValidated, setWasValidated] = useState(false);

  const handleInputChange = (event) => {
    console.log("email", credential.email);
    console.log("email", credential["email"]);

    // credential.email = "new email";
    // credential["email"] = "new email";

    // const user = {
    //   email: "email@example.com",
    // };

    // const key = "email";
    // const user2 = {
    //   [key]: "email@example.com",
    // };

    setCredential({
      ...credential,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const error = {};
    if (!credential.email) {
      error.email = "Email is required !";
    } else if (!mailformat.test(credential.email)) {
      error.email = "Email is invalid !";
    }

    if (!credential.password) {
      error.password = "Password is required !";
    }

    setError(error);

    setWasValidated(true);

    // console.log("onSubmit  => email:", email, "password: ", password);

    if (Object.keys(error).length <= 0) {
      // Form không có error
      console.log("onSubmit => ", credential);
      // call API, xử lý logic
    } else {
      console.log("form errror ");
    }
  };

  return (
    <div className="login-form m-auto">
      <form
        onSubmit={handleFormSubmit}
        noValidate
        className={`${wasValidated ? "was-validated" : ""}`}
      >
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
            // value={email}
            // onChange={onEmailChange}
            value={credential.email}
            name="email"
            onChange={handleInputChange}
          />
          <label htmlFor="floatingInput">Email address</label>
          {error.email && <div className="invalid-feedback">{error.email}</div>}
        </div>
        <div className="form-floating mt-4">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            // value={password}
            // onChange={onPasswordChange}
            value={credential.password}
            name="password"
            onChange={handleInputChange}
          />
          <label htmlFor="floatingPassword">Password</label>
          {error.password && (
            <div className="invalid-feedback">{error.password}</div>
          )}
          {/* <div>Password is required</div> */}
        </div>
        <button className="mt-4 w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};
