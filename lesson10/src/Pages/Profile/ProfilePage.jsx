import { Link, Outlet } from "react-router-dom";

export default function ProfilePage() {
  return (
    <div className="d-flex">
      <div style={{ width: "380px" }}>
        <ul>
          <li>
            <Link to="/profile/edit">Edit Profile</Link>
          </li>
          <li>
            <Link to="/profile/settings">Profile Settings</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
