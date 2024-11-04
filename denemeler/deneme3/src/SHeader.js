import React from "react";
import "./App.css";

export default function SHeader() {
  return (
    <div>
      <form>
        {" "}
        <h1>Ne Arıyorsunuz ?</h1>
        <input type="text" />
        <button className="button">Ara</button>
      </form>
    </div>
  );
}
