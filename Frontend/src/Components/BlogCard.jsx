import React from "react";

function BlogCard(props) {
  return (
    <div className="w-100">
      <div className="card border border-1 border-black h-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title"> {props.title || "Default Title"}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            by {props.author || "Jaivik Thakkar"}
          </h6>
          <p className="card-text flex-grow-1">
            {props.excerpt || "Blog short description"}....
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
