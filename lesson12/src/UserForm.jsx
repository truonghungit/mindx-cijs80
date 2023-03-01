import { forwardRef } from "react";

function UserFormComponent(props, ref) {
  return (
    <form style={{ maxWidth: "420px" }}>
      <div className="card">
        <div className="card-body">
          <h1>User Form</h1>
          <div className="mt-3">
            <input
              type="text"
              name="email"
              ref={ref}
              id="email-input"
              placeholder="email"
              className="form-control"
            />
          </div>
          <div className="mt-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="password"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

const UserForm = forwardRef(UserFormComponent);

export default UserForm;
