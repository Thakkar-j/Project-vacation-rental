import React from "react";
import HeroSection from "../Components/HeroSection.jsx";
import { Link } from "react-router-dom";
function SiteMap() {
  return (
    <div>
      <HeroSection
        title="Site Map"
        description="Navigate our website easily to find your perfect vacation rental, contact our team, or explore our blog posts."></HeroSection>

      <h3 className="mb-3 font-aref-bold text-center my-4">Easy Navigation</h3>
      <p className="text-center fs-6">
        Explore our website and find what you're looking for.
      </p>
      {/* Put All links here... */}
      <ul className="container list-unstyled row justify-content-center text-center gy-4 mt-4 mb-5 text-decoration-underline">
        <li className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Link to="/" className="text-dark fs-5 fw-semibold">
            Home
          </Link>
        </li>
        <li className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Link to="/aboutus" className=" text-dark fs-5 fw-semibold">
            About Us
          </Link>
        </li>
        <li className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Link to="/contactus" className=" text-dark fs-5 fw-semibold">
            Contact Us
          </Link>
        </li>
        <li className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Link to="/blog" className=" text-dark fs-5 fw-semibold">
            Blog
          </Link>
        </li>
        <li className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Link to="/faqs" className=" text-dark fs-5 fw-semibold">
            FAQs
          </Link>
        </li>
        <li className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Link to="/signin" className=" text-dark fs-5 fw-semibold">
            Sign In
          </Link>
        </li>
        <li className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Link to="/sitemap" className=" text-dark fs-5 fw-semibold">
            Site Map
          </Link>
        </li>
        <li className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Link to="/listproperty" className=" text-dark fs-5 fw-semibold">
            List Your Property
          </Link>
        </li>
        <li className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Link to="/booking" className=" text-dark fs-5 fw-semibold">
            Booking
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SiteMap;
