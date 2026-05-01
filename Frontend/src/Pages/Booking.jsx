import HeroSection from "../Components/HeroSection.jsx";
import PropertyCard from "../Components/PropertyCard.jsx";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Booking() {
  // feach data from daatabse here...(Onject or JSON formate) use axios for that
  const [Properties, setProperties] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/prop/properties");
        setProperties(response.data.data || response.data || []);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setError(error.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProperties();
  }, []);
  if (IsLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <div>
        <HeroSection
          title="Booking"
          description="Secure your perfect vacation rental today with our easy and hassle-free booking process."></HeroSection>
      </div>
      <h2 className="text-center font-aref-bold my-4">
        Book from available properties...{" "}
      </h2>
      {/* Property card come here... */}
      {/* props:- thumbnailimage,title,propertylink,excerp */}
      <div className="container my-4 d-flex flex-wrap justify-content-evenly">
        {Properties.map((property) => (
          <PropertyCard
            key={property._id}
            thumbnailimage={property.thumbnailImage}
            title={property.title}
            excerpt={property.shortDescription}
            propertyType={property.propertyType}
            guests={property.numberOfGuests}
            bedrooms={property.bedrooms}
            propertylink={`/property/${property._id}`}></PropertyCard>
        ))}
      </div>
    </>
  );
}

export default Booking;
