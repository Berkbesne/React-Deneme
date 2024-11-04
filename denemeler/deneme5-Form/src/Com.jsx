import React, { useState } from "react";
import "../src/style/com.scss";
import { Card } from "./card";

export default function Com() {
  const [cards, setCards] = useState([]); // State to hold cards
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const showQuest = () => {
    // Add a new card with input and textarea values
    setCards([...cards, { missions: inputValue, todos: textareaValue }]);
    setInputValue(""); // Clear input
    setTextareaValue(""); // Clear textarea
  };

  return (
    <div className="com">
      <div>
        <div className="block">
          <label>Başlık</label>
          <input
            id="Input"
            type="text"
            placeholder="Başlık giriniz"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // Update state on input change
          />
        </div>
        <div className="block">
          <label>Task Giriniz</label>
          <textarea
            id="textarea"
            placeholder="Paragraf giriniz"
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)} // Update state on textarea change
          ></textarea>
        </div>
        <button className="ekleBtn" onClick={showQuest}>
          Ekle
        </button>

        <div className="flex">
          {cards.map((card, index) => (
            <Card key={index} missions={card.missions} todos={card.todos} />
          ))}
        </div>
      </div>
    </div>
  );
}
