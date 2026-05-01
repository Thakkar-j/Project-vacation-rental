import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    // Delay the state clearing slightly so the router navigates to '/' first,
    // preventing ProtectedRoute from intercepting and redirecting to '/signin'
    setTimeout(() => {
      logout();
    }, 10);
  };

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-black border-1 nav">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/logo2-final.png" alt="logo" width={69} height={37} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse nav justify-content-center justify-content-lg-end"
            id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faqs">
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booking">
                  Booking
                </Link>
              </li>
              {user ? (
                <li className="nav-item dropdown ms-lg-3 mt-2 mt-lg-0 d-flex align-items-center gap-2">
                  {user.image && (
                    <img
                      src={user.image}
                      alt="Profile"
                      className="rounded-circle border border-1 border-secondary"
                      style={{
                        width: "35px",
                        height: "35px",
                        objectFit: "cover",
                      }}
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <a
                    className="nav-link dropdown-toggle fw-semibold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    {/* {user.name || "Account"} */}
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    {user.role === "admin" ? (
                      <li>
                        <Link className="dropdown-item" to="/admin">
                          Admin Dashboard
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>
                      </li>
                    )}
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button
                        className="dropdown-item text-danger fw-semibold"
                        onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item ms-lg-3 mt-2 mt-lg-0 d-flex align-items-center">
                  <Link
                    className="btn btn-primary text-light px-4"
                    to="/signin">
                    Sign Up / Sign In
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
