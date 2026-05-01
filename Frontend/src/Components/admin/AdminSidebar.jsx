import React, { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";

function AdminSidebar() {
  const sidebarStyle = {
    width: "280px",
    minHeight: "100vh",
    position: "sticky",
    top: 0,
  };

  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    navigate("/");
    // Delay the state clearing slightly so the router navigates to '/' first,
    // preventing ProtectedRoute from intercepting and redirecting to '/signin'
    setTimeout(() => {
      logout();
    }, 10);
  };
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark border-end border-secondary"
      style={sidebarStyle}>
      <Link
        to="/admin/dashboard"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-3 fw-bold font-aref-bold">Admin Panel</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto gap-2">
        <li className="nav-item">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active bg-primary" : ""}`
            }>
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/allusers"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active bg-primary" : ""}`
            }>
            <i className="bi bi-people me-2"></i> All Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/propertylist"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active bg-primary" : ""}`
            }>
            <i className="bi bi-house me-2"></i> Properties
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/contactenrty"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active bg-primary" : ""}`
            }>
            <i className="bi bi-envelope me-2"></i> Contact Entries
          </NavLink>
        </li>
        <li className="nav-item">
          <button
            className="nav-link text-danger text-start w-100 fw-semibold"
            onClick={handleLogout}>
            <i className="bi bi-box-arrow-left me-2"></i> Logout
          </button>
        </li>
      </ul>
      <hr />
      <div>
        <Link
          to="/"
          className="d-flex align-items-center text-white text-decoration-none"
          target="_blank">
          <strong>Back to Website</strong>
          <i className="bi bi-box-arrow-right mx-2"></i>
        </Link>
        {/* Add logout button Here */}
      </div>
    </div>
  );
}

export default AdminSidebar;
