export default function CategoryCard({ category, active, onClick }) {
  return (
    <button
      className={`category-card ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {category.photo ? (
        <span className="cat-photo-wrap">
          <img src={category.photo} alt={category.label} className="cat-photo" />
          <span className="cat-photo-overlay" />
        </span>
      ) : null}
      <span className="cat-label">{category.label}</span>
    </button>
  );
}
