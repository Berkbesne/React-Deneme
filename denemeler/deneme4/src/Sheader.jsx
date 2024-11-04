import React from "react";
import "./App.css";
import { useState } from "react";

export default function SHeader({ search }) {
  const [valueInput, setValue] = useState("");
  const handleClick = (event) => {
    event.preventDefault(); //
    search(valueInput);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <form>
        <h1>Ne Arıyorsunuz?</h1>
        <input type="text" value={valueInput} onChange={handleChange} />
        <button className="button" onClick={handleClick}>
          Ara
        </button>
      </form>
    </div>
  );
}
