import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  const heroStyles = {
    backgroundImage: `url("/hero-section-image.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    minHeight: "60vh",
    position: "relative",
  };

  const overlayStyles = {
    backgroundColor: "rgba(0,0,0, 0.5)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  };

  const contentStyles = {
    position: "relative",
    zIndex: 2,
  };
  return (
    <>
      <div>
        {/* Hero section for home page  */}
        <div
          style={heroStyles}
          className="d-flex align-items-center justify-content-center text-center">
          <div style={overlayStyles}></div>
          <div style={contentStyles}>
            <h1 className="display-3 fw-bold font-aref-semi-bold">
              Find Your Perfect Vacation Rental
            </h1>
            <p className="fs-5">
              Explore unique stays, from cozy cottages to luxury villas, and
              make unforgettable memories.
            </p>
            <div className="mt-4 d-flex justify-content-center gap-3">
              <a
                href="#aboutus"
                className="btn btn-primary text-center text-light fw-semi-bold px-4 py-2">
                About Us
              </a>
              <Link
                to="/booking"
                className="btn btn-outline-light text-center fw-semi-bold px-4 py-2">
                Booking
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 py-4">
        <div className="row align-items-center g-5">
          <div className="col-12 col-md-6 text-center">
            <img
              src="/image1-aboutus.png"
              alt="How we started"
              className="img-fluid rounded-4 shadow-sm"
              style={{
                maxWidth: "500px",
                aspectRatio: "16/11",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="col-12 col-md-6">
            <h2
              className="display-6 font-aref-bold mb-4 text-center"
              id="aboutus">
              How We Started...{" "}
            </h2>
            <p className="fs-5 mb-3 text-center">
              It all began with a simple idea: everyone deserves a memorable and
              hassle-free vacation. Frustrated by the complexities of finding
              reliable and comfortable accommodations, we set out to create a
              platform that brings the best vacation rentals right to your
              fingertips.
            </p>
            <div className="text-center">
              <Link
                to="/aboutus"
                className="btn btn-primary text-light fw-semi-bold px-4 py-2">
                Know More...
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* List you property section */}
        <div className="container my-5 py-4">
          <h2
            className="display-6 font-aref-bold mb-4 text-center"
            id="listproperty">
            List Your Property
          </h2>
          <p className="fs-5 mb-3 text-center">
            Turn your extra space into extra income. Join our community of hosts
            and start welcoming guests from around the world to your property
            today. It's easy, secure, and rewarding! Whether you have a cozy
            spare room, a luxurious villa, or a charming countryside cottage,
            our platform makes it incredibly easy to showcase your space to
            millions of travelers. We provide comprehensive host protection,
            24/7 global support, and intuitive tools to manage your bookings and
            communicate with guests seamlessly.
          </p>
          <div className="text-center">
            <Link
              to="/listproperty"
              className="btn btn-primary text-light fw-semi-bold px-4 py-2">
              Get Started...
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
