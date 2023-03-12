import { useState } from "react";

export default function LoginForm() {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log({ name, value });

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleChangeRemember = (event) => {
    setFormValue({
      ...formValue,
      remember: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ formValue });
    // Call API for Login
  };

  return (
    <div className="login-form mx-auto">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formValue.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formValue.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberCheckbox"
                name="remember"
                checked={formValue.remember}
                onChange={handleChangeRemember}
              />
              <label className="form-check-label" htmlFor="rememberCheckbox">
                Remember Me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
