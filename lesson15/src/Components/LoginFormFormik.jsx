import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  password: yup
    .string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
});

const initialValues = {
  email: "",
  password: "",
  rememberMe: false,
};

export default function LoginFormFormik() {
  const [showPopup, setShowPopup] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="login-form mx-auto">
      <div className="card">
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <div>{formik.errors.email}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <div>{formik.errors.password}</div>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberCheckbox"
                name="rememberMe"
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}
              />
              <label className="form-check-label" htmlFor="rememberCheckbox">
                Remember Me
              </label>
            </div>
            <button
              type="button"
              onClick={() => setShowPopup(true)}
              className="btn btn-primary"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      <Modal show={showPopup}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowPopup(false)}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
