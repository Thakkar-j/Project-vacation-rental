import React, { useEffect, useState } from "react";
import axios from "axios";

function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/prop/properties");
        setProperties(response.data.data || response.data || []);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError(err.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className="mb-3 font-aref-bold text-center my-4">
        Property List Entries
      </h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Index</th>
              <th>Title</th>
              <th>Address</th>
              <th>Price / Night</th>
              <th>Bedrooms</th>
            </tr>
          </thead>
          <tbody>
            {properties.length > 0 ? (
              properties.map((property, index) => (
                <tr key={property._id}>
                  <td>{index + 1}</td>
                  <td>{property.title}</td>
                  <td>{property.address}</td>
                  <td>₹{property.price}</td>
                  <td>{property.bedrooms}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No property entries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PropertyList;
