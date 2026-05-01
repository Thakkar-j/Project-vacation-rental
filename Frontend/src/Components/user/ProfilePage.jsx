import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import ListPropertyForm from "../host/ListPropertyForm.jsx";
import axios from "axios";

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    // Delay the state clearing slightly so the router navigates to '/' first,
    // preventing ProtectedRoute from intercepting and redirecting to '/signin'
    setTimeout(() => {
      logout();
    }, 10);
  };

  const deleteUser = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone.",
    );
    if (!confirmDelete) return;

    try {
      const backendUrl =
        import.meta.env.VITE_BACKEND_URL || "http://localhost:3003";
      const response = await axios.delete(
        `${backendUrl}/api/users/user/${user.email}`,
      );

      if (response.status === 200) {
        // alert("Account deleted successfully.");
        handleLogout(); // Logs the user out and navigates back to home
      }
    } catch (error) {
      console.error("Error deleting account:", error);
      alert("Failed to delete account. Please try again.");
    }
  };

  return (
    <div className="container my-5">
      <ul className="nav nav-tabs justify-content-center my-5">
        <li className="nav-item">
          <button
            className={`nav-link text-dark ${activeTab === "profile" ? "active fw-bold" : ""}`}
            onClick={() => setActiveTab("profile")}>
            Profile Details
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link text-dark ${activeTab === "bookings" ? "active fw-bold" : ""}`}
            onClick={() => setActiveTab("bookings")}>
            My Bookings
          </button>
        </li>
        {user.role === "host" && (
          <li className="nav-item">
            <button
              className={`nav-link text-dark ${activeTab === "listProperty" ? "active fw-bold" : ""}`}
              onClick={() => setActiveTab("listProperty")}>
              List your property
            </button>
          </li>
        )}

        <li className="nav-item">
          <button
            className={`nav-link text-dark ${activeTab === "settings" ? "active fw-bold" : ""}`}
            onClick={() => setActiveTab("settings")}>
            Account Settings
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link text-danger ${activeTab === "logout" ? "active fw-bold" : ""}`}
            onClick={() => setActiveTab("logout")}>
            Logout
          </button>
        </li>
      </ul>

      {/* Tab Content Area */}
      {/* Profile content */}
      <div className="tab-content mt-4">
        {activeTab === "profile" && (
          <div className="text-center">
            {user?.image && (
              <img
                src={user.image}
                alt="Profile"
                className="rounded-circle mb-3 shadow-sm border border-secondary"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                referrerPolicy="no-referrer"
              />
            )}
            <h4 className="mb-3">Welcome, {user.name}!</h4>
            <p className="text-muted mb-1 fs-5">
              <strong>Email: </strong> {user.email}
            </p>
            <p className="text-muted mb-3 fs-5">
              <strong>Role: </strong>{" "}
              <span className="badge bg-dark text-capitalize">
                {user.role === "host" ? "Property Host" : "Traveler (User)"}
              </span>
            </p>
          </div>
        )}
        {/* Bookings content*/}
        {activeTab === "bookings" && (
          <div className="text-center">
            <h4 className="mb-3">My Bookings</h4>
            <p className="text-muted">
              Your past and upcoming bookings will appear here.
            </p>
          </div>
        )}

        {activeTab === "listProperty" && <ListPropertyForm />}
        {/* setting content  */}
        {activeTab === "settings" && (
          <div className="text-center">
            <h4 className="mb-3">Account Settings</h4>
            <p className="text-muted">
              Manage your preferences and security settings here.You can also
              delete your account here.
            </p>
            <button
              className="btn btn-danger px-4 fw-semibold mt-3"
              onClick={deleteUser}>
              Delete your account
            </button>
          </div>
        )}
        {/* Logout content */}
        {activeTab === "logout" && (
          <div className="text-center">
            <h4 className="mb-3">Confirm Logout</h4>
            <p className="text-muted">
              Are you sure you want to sign out of your account?
            </p>
            <button
              className="btn btn-danger px-4 fw-semibold mt-3"
              onClick={handleLogout}>
              Yes, Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
