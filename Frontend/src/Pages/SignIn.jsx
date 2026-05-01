import React, { useState, useContext } from "react";
import HeroSection from "../Components/HeroSection.jsx";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

function SignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [role, setRole] = useState("user");
  const { setUser } = useContext(AuthContext);

  // Google login handler
  const responseGoogle = async (authResult) => {
    setError(null); // Clear any previous errors on new attempt
    try {
      if (authResult["code"]) {
        const backendUrl =
          import.meta.env.VITE_BACKEND_URL || "http://localhost:3003";
        const result = await axios.get(
          `${backendUrl}/auth/google?code=${authResult.code}&role=${role}`,
        );
        console.log("Backend Response:(from frontend) ", result.data); // Check what the backend actually returned

        if (result.data && result.data.data) {
          const { email, name, profilePic, role: userRole } = result.data.data;
          const token = result.data.token;
          const obj = { email, name, token, image: profilePic, role: userRole };
          localStorage.setItem("user-info", JSON.stringify(obj));

          // Update the global context state so the rest of the app knows the user is signed in
          setUser(obj);
          if (userRole === "admin") {
            navigate("/admin");
          } else {
            navigate("/profile");
          }
        } else {
          setError("Authentication failed. User data missing.");
          console.error(
            "User data missing from response. See 'Backend Response' above.",
          );
        }
      } else {
        console.log(authResult);
        throw new Error(authResult);
      }
    } catch (error) {
      setError("Failed to authenticate with Google. Please try again.");
      console.log("Error while Google Login...", error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: () => setError("Google Login was canceled or failed."),
    flow: "auth-code",
  });

  return (
    <div>
      <HeroSection
        title="Sign Up / Sign In"
        description="Join us or access your account to manage your bookings. Enjoy hassle-free Google authentication—no passwords to remember!"></HeroSection>

      {/* sign in/ sign up card card  */}
      <div className="container my-5 d-flex justify-content-center">
        <div
          className="card shadow-sm p-4 text-center border-1 border-black"
          style={{ maxWidth: "400px", width: "100%" }}>
          <h3 className="mb-3 font-aref-bold">Welcome</h3>
          <p className="text-muted mb-4">
            Please sign up or sign in to continue. Please sign up as Host to
            list your property.
          </p>
          {error && (
            <div className="alert alert-danger py-2" role="alert">
              {error}
            </div>
          )}

          <div className="mb-4 text-center">
            <label className="form-label fw-semibold ">Sign in as:</label>
            <select
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}>
              <option value="user">Traveler (User)</option>
              {/* <option value="admin">Admin</option> */}
              <option value="host">Property Host</option>
            </select>
          </div>

          <button
            className="btn btn-outline-dark d-flex align-items-center justify-content-center gap-2 w-100 py-2 fw-semibold"
            onClick={googleLogin}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google Logo"
              width="20"
              height="20"
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
