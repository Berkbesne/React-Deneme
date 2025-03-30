import Link from "./Link";

function Links({ links, onLinkDeleted }) {
  if (!links) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div>
      <div>
        <h2>Siteler</h2>
      </div>
      <div className="links-grid">
        {links.length > 0 ? (
          links.map((link) => (
            <Link key={link.id} link={link} onDelete={onLinkDeleted} />
          ))
        ) : (
          <p>Henüz hiç site eklenmemiş.</p>
        )}
      </div>
    </div>
  );
}

export default Links;
