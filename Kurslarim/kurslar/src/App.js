import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Links from "./Links";

function App() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState({ title: "", url: "" });
  const [isScrolled, setIsScrolled] = useState(false);

  const fetchLinks = async () => {
    const response = await axios.get("http://localhost:3001/links");
    setLinks(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/links", newLink);
    setNewLink({ title: "", url: "" });
    fetchLinks();
  };

  useEffect(() => {
    fetchLinks();

    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <h1>Site Listesi</h1>
      </header>
      <main className="app-main">
        <form className={`add-link-form ${isScrolled ? "scrolled" : ""}`} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Site Adı"
            value={newLink.title}
            onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
            required
          />
          <input
            type="url"
            placeholder="Site URL"
            value={newLink.url}
            onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
            required
          />
          <button type="submit">Site Ekle</button>
        </form>
        <Links links={links} onLinkDeleted={fetchLinks} />
      </main>
    </div>
  );
}

export default App;
