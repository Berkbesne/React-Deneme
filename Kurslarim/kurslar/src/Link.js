import axios from "axios";
import "./link.css";

function Link({ link, onDelete }) {
  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/links/${link.id}`);
    onDelete();
  };

  return (
    <div className="link-card">
      <h3>{link.title}</h3>
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        Siteye Git
      </a>
      <button onClick={handleDelete} className="delete-btn">
        Sil
      </button>
    </div>
  );
}

export default Link;
