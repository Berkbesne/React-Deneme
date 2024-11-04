import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [inputValue, setInputValue] = useState("");

  const HandleClick = () => {
    setText((prevText) => prevText + " " + inputValue);
    setInputValue(""); // Butona tıkladıktan sonra input alanını temizleyin
  };

  const HandleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <br />
        <input type="text" value={inputValue} onChange={HandleChange} />
        <button className="button" onClick={HandleClick}>
          ekle
        </button>
        <p>{text}</p>
      </header>
    </div>
  );
}

export default App;
