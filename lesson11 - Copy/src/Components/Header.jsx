import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { useAuth } from "../AuthContext";
import { TranslationContext } from "../TranslationContext";
import { translation } from "../translate";

const activeClass = (params) => {
  return params.isActive ? "nav-link active" : "nav-link";
};

export default function Header() {
  const { isAuthenticated, loggedInUser, setAuth } = useAuth();
  const { currentLanguage } = useContext(TranslationContext);

  const handleLogout = () => {
    setAuth(null);
  };

  return (
    <nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          App Name
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <NavLink className={activeClass} to="/products">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={activeClass} to="/profile">
                    Profile
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <ul className="navbar-nav ms-auto">
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <a className="nav-link">Welcome {loggedInUser.email}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={handleLogout}>
                    {translation[currentLanguage]["logout"]}
                  </a>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink className={activeClass} to="/login">
                  {translation[currentLanguage]["login"]}
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
