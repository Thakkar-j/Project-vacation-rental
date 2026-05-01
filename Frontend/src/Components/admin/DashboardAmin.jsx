import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";

function DashboardAmin() {
  const { user } = useContext(AuthContext);

  return (
    <div className="container text-center py-5">
      {user?.image && (
        <img
          src={user.image}
          alt="Admin Profile"
          className="rounded-circle mb-3 shadow-sm border border-secondary"
          style={{ width: "120px", height: "120px", objectFit: "cover" }}
          referrerPolicy="no-referrer"
        />
      )}
      <h1 className="display-4">Welcome, {user?.name || "Admin"}!!</h1>
      <p className="lead text-muted">You are logged in as an administrator.</p>
      <hr className="my-4" />
      <div className="mt-4">
        <p className="fs-5 mb-1">
          <strong>Email:</strong> {user?.email}
        </p>
        <p className="fs-5">
          <strong>Role:</strong>{" "}
          <span className="badge bg-danger text-capitalize">{user?.role}</span>
        </p>
      </div>
    </div>
  );
}

export default DashboardAmin;
