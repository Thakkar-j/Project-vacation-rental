import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import "bootstrap-icons/font/bootstrap-icons.css";
//import link
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer className="border-top border-dark border-1 py-5 bg-light">
        <div className="container  ">
          <div className="d-flex flex-column flex-md-row justify-content-evenly gap-4">
            {/* Section 1: Logo and Description */}
            <div className="text-center">
              <a className="navbar-brand my-4" href="/">
                <img
                  src="/logo2-final.png"
                  alt="logo"
                  width={104}
                  height={56}
                />
              </a>
              <p className="text-muted small" style={{ maxWidth: "200px" }}>
                Your trusted platform for finding the perfect vacation rental.
                Explore unique stays, from cozy cottages to luxury villas, and
                make unforgettable memories with us.
              </p>
            </div>

            {/* Section 2: Useful Links */}

            <div className="text-center text-md-start ">
              <h6 className="fw-bold  ">Useful links</h6>
              <ul className="list-unstyled ">
                <li className="mb-2">
                  <Link to="/" className="text-dark text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/aboutus"
                    className="text-dark text-decoration-none">
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/contactus"
                    className="text-dark text-decoration-none">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/blog" className="text-dark text-decoration-none">
                    Blog
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/booking"
                    className="text-dark text-decoration-none">
                    Booking
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/faqs" className="text-dark text-decoration-none">
                    FAQs
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/sitemap"
                    className="text-dark text-decoration-none">
                    Site Map
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/listproperty"
                    className="text-dark text-decoration-none">
                    List Property
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/testpage"
                    className="text-dark text-decoration-none">
                    Test Page
                  </Link>
                </li>
              </ul>
            </div>

            {/* Section 3: Social Media Icons */}
            <div className="text-center ">
              <h6 className="fw-bold mb-3">Follow us:- </h6>
              <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                <a
                  href="https://facebook.com"
                  className="btn btn-sm btn-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "45px", height: "45px" }}
                  title="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://twitter.com"
                  className="btn btn-sm btn-info rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "45px", height: "45px" }}
                  title="Twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="https://youtube.com"
                  className="btn btn-sm btn-danger rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "45px", height: "45px" }}
                  title="YouTube">
                  <i className="bi bi-youtube"></i>
                </a>
                <a
                  href="https://instagram.com"
                  className="btn btn-sm btn-secondary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "45px", height: "45px" }}
                  title="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://whatsapp.com"
                  className="btn btn-sm btn-success rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "45px", height: "45px" }}
                  title="WhatsApp">
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
