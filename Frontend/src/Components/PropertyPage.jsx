// On this page we are going to featch property details from database and show it all details here ...

import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const PropertyPage = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Helper function to map amenities to Bootstrap icons
  const getAmenityIcon = (amenity) => {
    switch (amenity) {
      case "Free Parking":
        return "bi-p-circle";
      case "Air Conditioning":
        return "bi-snow";
      case "Wi-Fi":
        return "bi-wifi";
      case "Hot Water":
        return "bi-droplet-fill";
      case "Washing Machine":
        return "bi-usb-drive"; // Approximation
      case "Kitchen":
        return "bi-cup-hot";
      case "TV":
        return "bi-tv";
      case "Heating":
        return "bi-fire";
      case "Refrigerator":
        return "bi-box"; // Approximation
      case "Swimming Pool":
        return "bi-water";
      case "Essentials (Towels, Bedsheets, Soap, Toilet Paper)":
        return "bi-stars";
      default:
        return "bi-check2-circle";
    }
  };

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

  return (
    <div className="container my-5">
      {/* Back navigation */}
      <div className="mb-4">
        <Link
          to="/booking"
          className="text-decoration-none text-dark fw-semibold fs-5">
          <i className="bi bi-chevron-left me-2"></i>
          Back to properties
        </Link>
      </div>

      {/* Header Section */}
      <div className="mb-4">
        <h1 className="font-aref-bold display-5 mb-2">{property.title}</h1>
        <p className="text-muted fs-5 mb-0">
          <i className="bi bi-geo-alt-fill text-primary me-2"></i>
          {property.address}
        </p>
      </div>

      {/* Image Gallery */}
      <div className="row g-2 mb-5">
        <div className="col-12 col-md-8">
          <img
            src={property.thumbnailImage}
            alt="Thumbnail"
            className="img-fluid rounded-4 w-100 shadow-sm"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-4 d-none d-md-flex flex-column gap-2">
          {property.internalImages?.slice(0, 2).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Internal ${index + 1}`}
              className="img-fluid rounded-4 w-100 shadow-sm"
              style={{ height: "196px", objectFit: "cover" }}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="row g-5">
        {/* Left Column - Details */}
        <div className="col-lg-8">
          <div className="d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">
            <div>
              <h3 className="font-aref-bold mb-1">
                Entire {property.propertyType} hosted by VacationRenter
              </h3>
              <p className="text-muted mb-0 fs-5">
                {property.numberOfGuests} guests &bull; {property.bedrooms}{" "}
                bedrooms &bull;{" "}
                {property.petsAllowed === "Yes" ? "Pets Allowed" : "No Pets"}
              </p>
            </div>
          </div>

          <div className="mb-5">
            <h4 className="font-aref-bold mb-3">About this space</h4>
            <p className="fs-5 text-dark mb-4">{property.shortDescription}</p>
            <p className="fs-6 text-muted lh-lg">{property.longDescription}</p>
          </div>

          <div className="mb-5">
            <h4 className="font-aref-bold mb-4">What this place offers</h4>
            <div className="row g-4">
              {property.amenities?.map((amenity, index) => (
                <div className="col-sm-6 d-flex align-items-center" key={index}>
                  <i
                    className={`bi ${getAmenityIcon(amenity)} fs-4 me-3 text-secondary`}></i>
                  <span className="fs-5">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-aref-bold mb-4">Property Policies</h4>
            <ul className="list-group list-group-flush fs-5 text-muted">
              <li className="list-group-item bg-transparent px-0 border-0">
                <i className="bi bi-info-circle me-3"></i>{" "}
                <strong>Pets:</strong>{" "}
                {property.petsAllowed === "Yes" ? "Allowed" : "Not Allowed"}
              </li>
              <li className="list-group-item bg-transparent px-0 border-0">
                <i className="bi bi-info-circle me-3"></i>{" "}
                <strong>Smoking:</strong>{" "}
                {property.smokingAllowed === "Yes" ? "Allowed" : "Not Allowed"}
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Booking Card */}
        <div className="col-lg-4">
          <div
            className="card shadow-sm border-1 border-black"
            style={{ top: "100px" }}>
            <div className="card-body p-4">
              <h2 className="card-title mb-4 font-aref-bold">
                ₹{property.price}{" "}
                <span className="fs-5 fw-normal text-muted">/ night</span>
              </h2>

              <div className="border border-1 border-secondary rounded-3 mb-4 p-3 text-center bg-light">
                <span className="fw-semibold text-muted">
                  Booking integration coming soon!
                </span>
              </div>

              <Link
                to={`/property/cart/${id}`}
                className="btn btn-primary w-100 py-3 fs-5 fw-bold text-light mb-3">
                Reserve Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
