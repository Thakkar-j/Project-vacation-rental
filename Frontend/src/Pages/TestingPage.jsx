import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

// This page is for testing the file upload functionality with Multer and Cloudinary.
function TestingPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [user, setUser] = useState(null);

  const onSubmit = async (data) => {
    // 1. Create a new FormData object
    const formData = new FormData();

    // Append the text input field
    formData.append("name", data.name);

    // 2. Append the single thumbnail image (it's at index 0 of the FileList)
    if (data.thumbnailImage && data.thumbnailImage.length > 0) {
      formData.append("thumbnailImage", data.thumbnailImage[0]);
    }

    // 3. Loop through the multiple internal images and append each one
    if (data.internalImages && data.internalImages.length > 0) {
      for (let i = 0; i < data.internalImages.length; i++) {
        formData.append("internalImages", data.internalImages[i]);
      }
    }

    console.log("Testing FormData prepared for Multer!");

    try {
      // Example of how you would send it with Axios:
      const response = await axios.post("/api/test", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Upload successful:(Frontend)", response.data);
    } catch (error) {
      console.error("Error uploading the form:", error);
    }
  };

  return (
    <>
      <div className="container my-5">
        <h1>Testing Page </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          className="row g-4">
          <div className="col-12">
            <label className="form-label fw-semibold">Name:</label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="invalid-feedback">Name is required</span>
            )}
          </div>
          <div className="col-md-6">
            <label className="form-label fw-semibold">
              Thumbnail Image (Upload one):{" "}
            </label>
            <input
              type="file"
              accept="image/*"
              className={`form-control ${errors.thumbnailImage ? "is-invalid" : ""}`}
              {...register("thumbnailImage", { required: true })}
            />
            {errors.thumbnailImage && (
              <span className="invalid-feedback">
                A thumbnail image is required
              </span>
            )}
          </div>
          <div className="col-md-6">
            <label className="form-label fw-semibold">
              Internal Images (Upload 3):{" "}
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              className={`form-control ${errors.internalImages ? "is-invalid" : ""}`}
              {...register("internalImages", {
                required: "Please upload at least 1 internal image.",
                validate: (files) =>
                  files.length <= 3 ||
                  "You can only upload a maximum of 3 images.",
              })}
            />
            {errors.internalImages && (
              <span className="invalid-feedback">
                {errors.internalImages.message}
              </span>
            )}
          </div>
          <div className="col-12 mt-4">
            <button type="submit" className="btn btn-primary text-light">
              Submit Test Form
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default TestingPage;
