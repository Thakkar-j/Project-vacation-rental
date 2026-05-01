import React from "react";
import HeroSection from "../Components/HeroSection.jsx";
import { Link } from "react-router-dom";

function FAQPage() {
  return (
    <>
      <div>
        <HeroSection
          title="FAQs"
          description="Find answers to the most common questions about booking, managing, and enjoying your perfect vacation rental stay."></HeroSection>
      </div>

      <div
        className="accordion accordion-flush container border border-1 border-black rounded-2 my-5"
        id="accordionFlushExample"
        style={{ width: "50vw" }}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne">
              What is VacationRenter?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              VacationRenter brings all the rental options from the leading
              travel sites together in one place and showcases only the best
              results. This saves you time and helps you find the perfect rental
              for your next trip.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo">
              How do I book a vacation rental?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              Once you find a property you love, simply click on it. You will be
              securely redirected to our partner's website (like Booking.com or
              Vrbo) to complete your reservation and process your payment.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree">
              What is the cancellation policy?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              Cancellation policies vary depending on the property and the
              specific booking site it is listed on. You will be able to review
              the exact cancellation terms before finalizing your booking on the
              partner's checkout page.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour">
              Are pets allowed in the rentals?
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              Many of our properties are pet-friendly! You can easily filter
              your search results by selecting the "Pets Allowed" amenity to
              only see homes that welcome your furry friends.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive">
              How do I contact the property host or manager?
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              After your booking is confirmed, you will receive an email from
              the booking partner containing the property manager's contact
              information, so you can reach out to them directly with any
              questions.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix">
              When will I receive my check-in instructions?
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              Check-in instructions are typically sent via email by the property
              host a few days before your scheduled arrival. These will include
              details like the address, door codes, and key pickup instructions.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSeven"
              aria-expanded="false"
              aria-controls="flush-collapseSeven">
              Is my payment secure?
            </button>
          </h2>
          <div
            id="flush-collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              Absolutely. We only partner with trusted, secure booking
              platforms. Your payment is processed safely using
              industry-standard encryption on the partner's secure checkout
              page.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseEight"
              aria-expanded="false"
              aria-controls="flush-collapseEight">
              Are there any hidden fees?
            </button>
          </h2>
          <div
            id="flush-collapseEight"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              The total price you see at checkout on our partner's site is the
              final price, which includes the nightly rate, cleaning fees, and
              taxes. We believe in complete transparency before you book.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseNine"
              aria-expanded="false"
              aria-controls="flush-collapseNine">
              Can I modify my booking after it's confirmed?
            </button>
          </h2>
          <div
            id="flush-collapseNine"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              Yes, but modifications are subject to the property's availability
              and the host's policy. To make changes, you will need to log into
              the partner site where you originally completed the booking or
              contact the host.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTen"
              aria-expanded="false"
              aria-controls="flush-collapseTen">
              What should I do if I have an issue during my stay?
            </button>
          </h2>
          <div
            id="flush-collapseTen"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              If you experience any issues while at the property, please contact
              the host or property manager immediately using the contact details
              provided in your booking confirmation. They are there to help
              ensure you have a great stay.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseEleven"
              aria-expanded="false"
              aria-controls="flush-collapseEleven">
              How do I leave a review after my trip?
            </button>
          </h2>
          <div
            id="flush-collapseEleven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              After your stay, the booking partner will send you an email
              inviting you to review the property. Your feedback is incredibly
              valuable to help future travelers find the perfect place.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwelve"
              aria-expanded="false"
              aria-controls="flush-collapseTwelve">
              Still have a doubt? Feel free to contact us.
            </button>
          </h2>
          <div
            id="flush-collapseTwelve"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              If you couldn't find the answer to your question, our support team
              is always ready to assist you.{" "}
              <Link
                to="/contactus"
                className="text-primary text-decoration-underline fw-semibold">
                Click here to contact us
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQPage;
