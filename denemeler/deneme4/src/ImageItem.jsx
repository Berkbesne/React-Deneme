import React from "react";

export default function ImageItem({ image }) {
  return (
    <div className="image-Item">
      <img src={image.urls.small} alt={image.alt_description} />{" "}
    </div>
  );
}
