import React from "react";
import { Link } from "react-router-dom";

function NoAdmin() {
  return (
    <div className="container text-center my-5 py-5">
      <img
        src="/access-denied.png"
        alt="Access Denied"
        className="img-fluid mb-4"
        style={{ maxWidth: "350px" }}
      />
      <h1 className="display-4 fw-bold text-danger">Access Denied</h1>
      <h2 className="mb-3">You do not have permission to view this page.</h2>
      <p className="lead text-muted mb-4 px-md-5">
        This area is restricted to administrators only. If you are an
        administrator, please ensure you are signed in with the correct account.
      </p>
      <Link to="/" className="btn btn-primary btn-lg px-4 py-2">
        Go Back Home
      </Link>
    </div>
  );
}

export default NoAdmin;
