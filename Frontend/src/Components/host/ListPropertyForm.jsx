import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";

const amenitiesList = [
  "Free Parking",
  "Air Conditioning",
  "Wi-Fi",
  "Hot Water",
  "Washing Machine",
  "Kitchen",
  "TV",
  "Heating",
  "Refrigerator",
  "Swimming Pool",
  "Essentials (Towels, Bedsheets, Soap, Toilet Paper)",
];

function ListPropertyForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // 1. Create a new FormData object
    const formData = new FormData();

    // 2. Append standard text and number fields
    formData.append("title", data.title);
    formData.append("shortDescription", data.shortDescription);
    formData.append("longDescription", data.longDescription);
    formData.append("address", data.address);
    formData.append("price", data.price);
    formData.append("propertyType", data.propertyType);
    formData.append("bedrooms", data.bedrooms);
    formData.append("numberOfGuests", data.numberOfGuests);
    formData.append("petsAllowed", data.petsAllowed);
    formData.append("smokingAllowed", data.smokingAllowed);

    // 3. Append amenities array
    if (data.amenities && data.amenities.length > 0) {
      data.amenities.forEach((amenity) => {
        formData.append("amenities", amenity);
      });
    }

    // 4. Append the single thumbnail image
    if (data.thumbnailImage && data.thumbnailImage.length > 0) {
      formData.append("thumbnailImage", data.thumbnailImage[0]);
    }

    // 5. Loop through the multiple internal images and append each one
    if (data.internalImages && data.internalImages.length > 0) {
      for (let i = 0; i < data.internalImages.length; i++) {
        formData.append("internalImages", data.internalImages[i]);
      }
    }

    console.log("Property FormData prepared for Multer!");

    try {
      // Update this endpoint URL to match your actual backend route
      const response = await axios.post("/api/prop/property", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Upload successful:(Frontend)", response.data);

      // Empty all form fields after successful upload
      reset();
    } catch (error) {
      console.error("Error uploading the property:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <>
        <div>
          {" "}
          <h3 className="mb-3 font-aref-bold text-center my-4">
            List your property
          </h3>
        </div>
        <div
          className="card shadow-sm p-4 mx-auto text-start border-1 border-black"
          style={{ maxWidth: "800px" }}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form-data"
            className="row g-4">
            <div className="col-12">
              <label className="form-label fw-semibold">Title: </label>
              <input
                type="text"
                className={`form-control ${errors.title ? "is-invalid" : ""}`}
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="invalid-feedback">This field is required</span>
              )}
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold">
                Short Description:{" "}
              </label>
              <input
                type="text"
                className={`form-control ${errors.shortDescription ? "is-invalid" : ""}`}
                {...register("shortDescription", { required: true })}
              />
              {errors.shortDescription && (
                <span className="invalid-feedback">This field is required</span>
              )}
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold">
                Long Description:{" "}
              </label>
              <textarea
                className={`form-control ${errors.longDescription ? "is-invalid" : ""}`}
                rows="3"
                {...register("longDescription", { required: true })}></textarea>
              {errors.longDescription && (
                <span className="invalid-feedback">This field is required</span>
              )}
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold">
                Address{" "}
                <span className="text-muted fw-normal fs-6">
                  (Street Address, City, State / Province, Country, Zip / Postal
                  Code)
                </span>
              </label>
              <textarea
                className={`form-control ${errors.address ? "is-invalid" : ""}`}
                rows="2"
                {...register("address", { required: true })}></textarea>
              {errors.address && (
                <span className="invalid-feedback">This field is required</span>
              )}
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Price per Night (₹):{" "}
              </label>
              <input
                type="number"
                className={`form-control ${errors.price ? "is-invalid" : ""}`}
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="invalid-feedback">This field is required</span>
              )}
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold">Property Type: </label>
              <select
                className={`form-select ${errors.propertyType ? "is-invalid" : ""}`}
                {...register("propertyType", { required: true })}>
                <option value="">Select...</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Villa">Villa</option>
                <option value="Cabin">Cabin</option>
                <option value="Condo">Condo</option>
              </select>
              {errors.propertyType && (
                <span className="invalid-feedback">
                  Please select a property type
                </span>
              )}
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold">Bedrooms: </label>
              <select
                className={`form-select ${errors.bedrooms ? "is-invalid" : ""}`}
                {...register("bedrooms", { required: true })}>
                <option value="">Select...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </select>
              {errors.bedrooms && (
                <span className="invalid-feedback">
                  Please select the number of bedrooms
                </span>
              )}
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Number of Guests (2 - 10):{" "}
              </label>
              <input
                type="number"
                min="2"
                max="10"
                className={`form-control ${errors.numberOfGuests ? "is-invalid" : ""}`}
                {...register("numberOfGuests", {
                  required: true,
                  min: 2,
                  max: 10,
                })}
              />
              {errors.numberOfGuests && (
                <span className="invalid-feedback">
                  Please enter a valid number of guests
                </span>
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
            <div className="col-12">
              <label
                className={`form-label fw-semibold ${errors.amenities ? "text-danger" : ""}`}>
                Amenities:
              </label>
              <div className="row g-2 mt-1">
                {amenitiesList.map((amenity) => (
                  <div className="col-12 col-sm-6 col-md-4" key={amenity}>
                    <div className="form-check">
                      <input
                        className={`form-check-input ${errors.amenities ? "is-invalid" : ""}`}
                        type="checkbox"
                        value={amenity}
                        id={`amenity-${amenity}`}
                        {...register("amenities", {
                          required: "Please select at least one amenity.",
                        })}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`amenity-${amenity}`}>
                        {amenity}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              {errors.amenities && (
                <div
                  className="text-danger mt-1"
                  style={{ fontSize: "0.875em" }}>
                  {errors.amenities.message}
                </div>
              )}
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Are pets allowed?{" "}
              </label>
              <select className="form-select" {...register("petsAllowed")}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Is smoking allowed?{" "}
              </label>
              <select className="form-select" {...register("smokingAllowed")}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            <div className="col-12 mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-100 py-2 fs-5 fw-bold text-light">
                {isSubmitting ? "Submitting..." : "Submit Property Listing"}
              </button>
            </div>
          </form>
        </div>
      </>
    </div>
  );
}

export default ListPropertyForm;
