import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="container text-center my-5 py-5">
      <img
        src="/404-illustration.png"
        alt="404 Not Found"
        className="img-fluid mb-4"
        style={{ maxWidth: "400px" }}
      />
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <h2 className="mb-3">Oops! We couldn't find that page.</h2>
      <p className="lead text-muted mb-4">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn btn-primary btn-lg px-4 py-2">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
