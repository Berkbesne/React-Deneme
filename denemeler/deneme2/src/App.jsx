import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    isim: "",
    soyisim: "",
    mail: "",
    yas: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Form gönderme işlemlerini burada yapabilirsiniz
    console.log(formData);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <input
        className="isim"
        type="text"
        name="isim"
        value={formData.isim}
        onChange={handleChange}
        placeholder="İsim"
      />
      <input
        className="soyisim"
        type="text"
        name="soyisim"
        value={formData.soyisim}
        onChange={handleChange}
        placeholder="Soyisim"
      />
      <input
        className="yas"
        type="number"
        name="yas"
        min="0"
        max="50"
        value={formData.yas}
        onChange={handleChange}
        placeholder="Yaş"
      />
      <input
        className="mail"
        type="email"
        name="mail"
        placeholder="example@example.com"
        value={formData.mail}
        onChange={handleChange}
        required
      />
      <button className="button" onClick={handleSubmit}>
        Kayıt Ol
      </button>
    </div>
  );
}

export default App;
