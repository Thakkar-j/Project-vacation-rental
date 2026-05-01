import React, { useEffect, useState } from "react";
import axios from "axios";

function ContactFormEntry() {
  // 1. Initialize state for data, loading, and error
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Use useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        //  Proxy is set, just use the relative /api path
        const response = await axios.get("/api/contact");

        // Update state with the fetched data
        setData(response.data.data || []);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "Something went wrong");
      } finally {
        // Loading is complete whether it succeeded or failed
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // 3. Handle loading and error states in your UI
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className="mb-3 font-aref-bold text-center my-4">
        Contact Form Entries
      </h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>WhatsApp?</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((entry, index) => (
                <tr key={entry._id}>
                  <td>{index + 1}</td>
                  <td>{entry.name}</td>
                  <td>{entry.email}</td>
                  <td>{entry.mobileNumber}</td>
                  <td>{entry.isWhatsapp ? "Yes" : "No"}</td>
                  <td>{entry.message}</td>
                  <td>{formatDate(entry.createdAt)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No contact entries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactFormEntry;
