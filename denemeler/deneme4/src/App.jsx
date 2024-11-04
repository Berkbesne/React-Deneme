import React from "react";
import "./App.css";
import SHeader from "./Sheader.jsx";
import searchImages from "./api.jsx";
import { useState } from "react";
import ImagesList from "./ImagesList.jsx";

function App() {
  const [images, setimages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setimages(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <SHeader search={handleSubmit} />
        <ImagesList imagesPlaceholder={images} />{" "}
        {/* Corrected the component name */}
      </header>
    </div>
  );
}

export default App;
