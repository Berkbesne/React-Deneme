import React from "react";
import "../src/style/card.scss";

export const Card = ({ missions, todos }) => {
  return (
    <div className="card">
      <h3>Göreviniz</h3>
      <p>{missions}</p>
      <h3>yapılacaklar</h3>
      <p>{todos}</p>
      <button className="rmBtn">Sil</button>
      <button className="UBtn">Güncelle</button>
    </div>
  );
};
