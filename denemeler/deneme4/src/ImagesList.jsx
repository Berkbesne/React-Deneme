import React from "react";
import ImageItem from "./ImageItem";

export default function ImagesList({ imagesPlaceholder }) {
  return (
    <div>
      {imagesPlaceholder.map((image, index) => (
        <ImageItem className="ImageItem" key={index} image={image} />
      ))}
    </div>
  );
}
