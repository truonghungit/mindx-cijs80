import "./Register.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const signupValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last name không được để trống"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string().required("Password is Required"),
  confirmPassword: Yup.string()
    .required("Confirm Password is Required")
    .oneOf([Yup.ref("password"), null], "Confirm Passwords must match"),
});

const registerInitialValues = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const Register = () => {
  return (
    <>
      <div className="container">
        <div className="register-container">
          <h1>Register Your Account</h1>
          <Formik
            validationSchema={signupValidationSchema}
            initialValues={registerInitialValues}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched, dirty }) => {
              return (
                <Form>
                  <div className="mb-3">
                    <label>First Name *</label>
                    <Field
                      type="text"
                      name="firstName"
                      className="form-control"
                    />
                    {errors.firstName && touched.firstName && (
                      <div>{errors.firstName}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label>Last Name *</label>
                    <Field
                      type="text"
                      name="lastName"
                      className="form-control"
                    />
                    {errors.lastName && touched.lastName && (
                      <div>{errors.lastName}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label>Phone (optional)</label>
                    <Field type="text" name="phone" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label>Email *</label>
                    <Field type="text" name="email" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label>Password *</label>
                    <Field
                      type="password"
                      name="password"
                      className="form-control"
                    />
                    {errors.password && touched.password && (
                      <div>{errors.password}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label>Confirm Password *</label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <div>{errors.confirmPassword}</div>
                    )}
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};
