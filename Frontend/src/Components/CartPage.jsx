import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function CartPage() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // States for booking details
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diffTime = end - start;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    }
    return 1;
  };

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`/api/prop/property/${id}`);
        // We expect a single object, not an array
        setProperty(response.data.data || response.data);
      } catch (error) {
        console.error("Error fetching property:", error);
        setError(error.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  if (isLoading)
    return (
      <div className="container my-5 text-center fs-4">
        Loading property details...
      </div>
    );
  if (error)
    return (
      <div className="container my-5 text-center text-danger fs-4">
        Error: {error}
      </div>
    );
  if (!property)
    return (
      <div className="container my-5 text-center fs-4">Property not found.</div>
    );

  const nights = calculateNights();
  const cleaningFee = 500; // Static placeholder cleaning fee
  const totalPrice = property.price * nights + cleaningFee;

  return (
    <div className="container my-5">
      {/* Back navigation */}
      <div className="mb-4">
        <Link
          to={`/property/${id}`}
          className="text-decoration-none text-dark fw-semibold fs-5">
          <i className="bi bi-chevron-left me-2"></i>
          Back to property
        </Link>
      </div>

      <h1 className="font-aref-bold display-5 mb-5">Review your booking</h1>

      <div className="row g-5">
        {/* Left Column: Trip Details & Payment */}
        <div className="col-lg-7">
          <div className="card shadow-sm border-1 border-black mb-4 bg-light">
            <div className="card-body p-4">
              <h4 className="font-aref-bold mb-4">Your trip</h4>
              <div className="row g-4">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Check-in</label>
                  <input
                    type="date"
                    className="form-control border-1 border-black"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Check-out</label>
                  <input
                    type="date"
                    className="form-control border-1 border-black"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">Guests</label>
                  <select
                    className="form-select border-1 border-black"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}>
                    {[...Array(property.numberOfGuests || 4).keys()].map(
                      (i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} Guest{i > 0 ? "s" : ""}
                        </option>
                      ),
                    )}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-5" />
          <h4 className="font-aref-bold mb-4">Ground rules</h4>
          <p className="text-muted fs-5 mb-1">
            We ask every guest to remember a few simple things about what makes
            a great guest.
          </p>
          <ul className="text-muted fs-5 mb-5">
            <li>Follow the house rules</li>
            <li>Treat your Host's home like your own</li>
          </ul>

          <button className="btn btn-primary w-100 py-3 fs-4 fw-bold text-light mb-3 shadow">
            Confirm and Pay
          </button>
        </div>

        {/* Right Column: Order Summary Card */}
        <div className="col-lg-5">
          <div
            className="card shadow-sm border-1 border-black sticky-top"
            style={{ top: "100px" }}>
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <img
                  src={property.thumbnailImage}
                  alt="thumbnail"
                  className="rounded-3 me-3 border border-1 border-secondary"
                  style={{
                    width: "120px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h5 className="font-aref-bold mb-1">{property.title}</h5>
                  <p className="text-muted small mb-0">
                    {property.propertyType}
                  </p>
                </div>
              </div>

              <p className="text-muted small mb-0">
                <i className="bi bi-geo-alt-fill text-primary me-1"></i>
                {property.address}
              </p>

              <hr className="my-4" />
              <h5 className="font-aref-bold mb-3">Price details</h5>
              <div className="d-flex justify-content-between mb-3 fs-5 text-muted">
                <span>
                  ₹{property.price} x {nights} night{nights > 1 ? "s" : ""}
                </span>
                <span>₹{property.price * nights}</span>
              </div>
              <div className="d-flex justify-content-between mb-3 fs-5 text-muted">
                <span>Cleaning fee</span>
                <span>₹{cleaningFee}</span>
              </div>
              <hr className="my-4" />
              <div className="d-flex justify-content-between fw-bold fs-4">
                <span>Total (INR)</span>
                <span>₹{totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
