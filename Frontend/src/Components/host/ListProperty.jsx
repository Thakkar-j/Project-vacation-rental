import React from "react";
import HeroSection from "../HeroSection.jsx";

import { Link } from "react-router-dom";

function ListProperty() {
  return (
    <>
      <div>
        <HeroSection
          title="List Your Property"
          description="Turn your property into a profitable vacation rental. Join our trusted platform and start welcoming guests today."></HeroSection>
      </div>
      {/* List your property form goes here sign in before listing */}
      <div className="container text-center my-5">
        <h3 className="mb-3 font-aref-bold text-center my-4">
          Ready to Host? Sign In to Get Started
        </h3>
        {/* Sign in card here */}
        <div className="container my-5 d-flex justify-content-center">
          <div
            className="card shadow-sm p-4 text-center border-1 border-black"
            style={{ maxWidth: "400px", width: "100%" }}>
            <h3 className="mb-3 font-aref-bold">Sign In As Host.</h3>
            <p className="text-muted mb-4">
              Securely connect your account to create your listing.
            </p>
            <Link
              to="/signin"
              className="btn btn-outline-dark d-flex align-items-center justify-content-center gap-2 w-100 py-2 fw-semibold">
              Sign Up / Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListProperty;
