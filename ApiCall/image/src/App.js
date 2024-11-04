import React, { useState } from "react";
import axios from "axios";

const UnsplashSearch = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query },
          headers: {
            Authorization:
              "Client-ID u6GoNMMVdVnFi10IEijbr2sqJsnA5npMs4SSDx9FAq0", // Buraya kendi Unsplash Access Key'inizi ekleyin
          },
        }
      );

      setImages(response.data.results);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Resim arayın"
        />
        <button type="submit">Ara</button>
      </form>

      <div className="image-grid">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
          />
        ))}
      </div>
    </div>
  );
};

export default UnsplashSearch;
