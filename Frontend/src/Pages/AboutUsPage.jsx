import React from "react";
import HeroSection from "../Components/HeroSection.jsx";
import { Link } from "react-router-dom";
//passing data in here section
function AboutUsPage() {
  return (
    <>
      <div>
        {/* <HeroSection></HeroSection> */}
        <HeroSection
          title="About Us"
          description="Discover how our passion for exceptional stays evolved into a trusted platform for finding your perfect vacation rental."></HeroSection>
      </div>
      {/* Section after hero start here */}
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
            <h2 className="display-6 font-aref-bold mb-4">
              How We Started...{" "}
            </h2>
            <p className="fs-5 mb-3">
              It all began with a simple idea: everyone deserves a memorable and
              hassle-free vacation. Frustrated by the complexities of finding
              reliable and comfortable accommodations, we set out to create a
              platform that brings the best vacation rentals right to your
              fingertips.
            </p>
            <p className="fs-5">
              Today, we're proud to connect travelers with incredible hosts
              worldwide, ensuring every trip is filled with comfort, joy, and
              unforgettable moments. Our commitment to quality and trust remains
              at the heart of everything we do.
            </p>
          </div>
        </div>
      </div>
      <div className="container my-5 py-4">
        <div className="row align-items-center g-5">
          <div className="col-12 col-md-6">
            <h2 className="display-6 font-aref-bold mb-4">
              The easiest way to find a stay
            </h2>
            <p className="fs-5 mb-3">
              Our intuitive platform is designed with you in mind. Whether
              you're planning a quick weekend getaway or a month-long retreat,
              browsing and booking your dream vacation home is just a few clicks
              away.
            </p>
            <p className="fs-5">
              With verified reviews, detailed property descriptions, and secure
              payment options, you can book with confidence. We take the stress
              out of travel planning so you can focus on making memories.
            </p>
          </div>
          <div className="col-12 col-md-6 text-center">
            <img
              src="/image2-aboutus.png"
              alt="The easiest way to find a stay"
              className="img-fluid rounded-4 shadow-sm"
              style={{
                maxWidth: "500px",
                aspectRatio: "16/11",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      <div className="container my-5 py-4">
        {/* Here three card come here. ( Icon, title, and short description) */}
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div
              className="card h-100 border-0 shadow-sm"
              style={{ width: "18rem" }}>
              <div className="card-body text-center mt-3">
                <i className="bi bi-house-add display-4 text-primary mb-3 d-block"></i>
                <h5 className="card-title font-aref-bold">Easy to list</h5>
                <p className="card-text text-muted">
                  Quickly and effortlessly list your property on our platform to
                  reach thousands of travelers looking for their next stay.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div
              className="card h-100 border-0 shadow-sm"
              style={{ width: "18rem" }}>
              <div className="card-body text-center mt-3">
                <i className="bi bi-compass display-4 text-primary mb-3 d-block"></i>
                <h5 className="card-title font-aref-bold">Easy navigation</h5>
                <p className="card-text text-muted">
                  Enjoy a seamless browsing experience with our user-friendly
                  interface designed to help you find the perfect vacation
                  rental.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div
              className="card h-100 border-0 shadow-sm"
              style={{ width: "18rem" }}>
              <div className="card-body text-center mt-3">
                <i className="bi bi-person-check display-4 text-primary mb-3 d-block"></i>
                <h5 className="card-title font-aref-bold">Hassle free login</h5>
                <p className="card-text text-muted">
                  Access your account securely and instantly with options like
                  Google Sign-In, eliminating the need to remember complex
                  passwords.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
