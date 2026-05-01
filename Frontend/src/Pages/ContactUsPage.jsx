import React from "react";
import HeroSection from "../Components/HeroSection.jsx";
import { useForm } from "react-hook-form";
import { data, Link } from "react-router-dom";
import axios from "axios";

function ContactUsPage() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Form Data:", data);
      const response = await axios.post("/api/contact", data);
      console.log("Success:", response.data);
      reset(); // Clears all form fields after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div>
        <HeroSection
          title="Contact Us"
          description="Have questions about our vacation rentals? Reach out to our dedicated support team today. We are here to help you!"></HeroSection>
      </div>
      {/* Main page content start here.... */}
      <div className="container my-5">
        <div className="row g-5">
          {/* Contact Details Section */}
          <div className="col-12 col-md-6">
            <h3 className="mb-4 font-aref-bold">Feel free to contact us.</h3>
            <p className="fs-5 mb-4 ">
              We are always here to help! If you have any questions about our
              properties, the booking process, or need assistance during your
              stay, reach out to us using the details below.
            </p>

            <div className="mb-4">
              <h5 className="fw-bold">Email Us:</h5>
              <a
                href="mailto:support@vacationrenter.com"
                className="text-decoration-none fs-5 text-primary fw-medium">
                <i className="bi bi-envelope-fill me-2"></i>
                support@vacationrenter.com
              </a>
            </div>

            <div className="mb-4">
              <h5 className="fw-bold">Call Us:</h5>
              <p className="mb-1">
                <a
                  href="tel:+919725169603"
                  className="text-decoration-none fs-5 text-dark fw-medium">
                  <i className="bi bi-telephone-fill me-2 text-primary"></i>+91
                  9725169603
                </a>
              </p>
              <p className="mb-0">
                <a
                  href="tel:+919313144735"
                  className="text-decoration-none fs-5 text-dark fw-medium">
                  <i className="bi bi-telephone-fill me-2 text-primary"></i>+91
                  9313144735
                </a>
              </p>
            </div>

            <div className="mb-5">
              <h5 className="fw-bold">WhatsApp:</h5>
              <a
                href="https://wa.me/919725169603"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none fs-5 text-success fw-medium">
                <i className="bi bi-whatsapp me-2"></i>Message us on WhatsApp
              </a>
            </div>

            <div className="p-4 bg-light border border-1 border-black rounded-3">
              <h5 className="fw-bold mb-2">Have a quick question?</h5>
              <p className="mb-0">
                You might find your answer instantly on our{" "}
                <Link
                  to="/faqs"
                  className="text-primary text-decoration-underline fw-semibold">
                  FAQs page
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="col-12 col-md-6">
            <h3 className="mb-4 font-aref-bold">Just fill the contact form</h3>
            <div className="card shadow-sm p-4 border-1 border-black">
              <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
                <div className="col-12">
                  <label className="form-label fw-semibold">Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <span className="invalid-feedback">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="col-12">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <span className="invalid-feedback">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="col-12">
                  <label className="form-label fw-semibold">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    className={`form-control ${errors.mobileNumber ? "is-invalid" : ""}`}
                    {...register("mobileNumber", {
                      required: "Mobile number is required",
                    })}
                  />
                  {errors.mobileNumber && (
                    <span className="invalid-feedback">
                      {errors.mobileNumber.message}
                    </span>
                  )}
                </div>

                <div className="col-12 mt-2">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input border-secondary"
                      id="isWhatsapp"
                      {...register("isWhatsapp")}
                    />
                    <label
                      className="form-check-label text-muted"
                      htmlFor="isWhatsapp">
                      Is this number available on WhatsApp?
                    </label>
                  </div>
                </div>

                <div className="col-12">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    rows="4"
                    {...register("message", {
                      required: "Message is required",
                    })}></textarea>
                  {errors.message && (
                    <span className="invalid-feedback">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <div className="col-12 mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2 fs-5  text-light">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactUsPage;
