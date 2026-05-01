import React from "react";
import { Link } from "react-router-dom";
function PropertyCard(props) {
  // Inside props: - thumbnailimage, title, excerpt, ameneties, peopertylink
  return (
    <div className="d-flex my-4" style={{ width: "22rem" }}>
      <div className="card border border-1 border-black w-100 d-flex flex-column">
        <img
          src={props.thumbnailimage || "/Propertyimage.png"}
          className="card-img-top"
          alt="..."
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h6 className="card-title font-aref-bold">
            {props.title || "Card title"}{" "}
          </h6>
          <p className="card-text flex-grow-1 mb-2">
            {props.excerpt ||
              "Some quick example text to build on the card title and make up the bulk of the card’s content."}
            {/* {props.amenities && (
              <ul className="list-unstyled mt-2">
                {props.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            )} */}
          </p>
          <p className="text-muted small fw-semibold mb-3">
            Type: {props.propertyType || "N/A"} &bull; {props.guests || 0}{" "}
            guests, {props.bedrooms || 0} beds
          </p>
          <div className="text-end mt-auto">
            <Link
              to={props.propertylink || "#"}
              className="btn btn-primary text-center text-light fw-semi-bold">
              view details...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
