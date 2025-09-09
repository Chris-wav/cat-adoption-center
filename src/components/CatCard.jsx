import { useContext } from "react";
import styles from "./CatCard.module.css";
import CatsContext from "./Context/CatsContext";

const CatCard = ({ cat, isInfoShown, onToggle }) => {
  const { setCats } = useContext(CatsContext);

  // Toggle favourite state
  const handleLike = (id) => {
    setCats((prev) =>
      prev.map((cat) => (cat.id === id ? { ...cat, liked: !cat.liked } : cat))
    );
  };

  // Toggle adopted state
  const handleAdopt = (id) => {
    setCats((prev) =>
      prev.map((cat) =>
        cat.id === id ? { ...cat, adopted: !cat.adopted } : cat
      )
    );
  };

  return (
    <div className={styles.card}>
      {/* Cat image */}
      <div className={styles.catImageWrapper}>
        {cat.url || cat.reference_image_id ? (
          <img
            src={
              cat.url ||
              `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`
            }
            alt={cat.name}
            className={styles.catImage}
          />
        ) : (
          <div className={styles.placeholder}>
            🐱
            <p className={styles.placeholderText}>No cute cat photo yet! 😸</p>
          </div>
        )}
      </div>

      {/* Cat info */}
      <h2 className={styles.breed}>{cat.name}</h2>
      <h4 className={styles.origin}>From: {cat.origin}</h4>
      <h4 className={styles.lifespan}>Lifespan: {cat.life_span} years</h4>

      {/* Action buttons */}
      <div className={styles.buttonsContainer}>
        <button className={styles.favourite} onClick={() => handleLike(cat.id)}>
          {cat.liked ? "❤️" : "🤍"}
        </button>
        <button
          className={styles.adoptButton}
          onClick={() => handleAdopt(cat.id)}
        >
          {cat.adopted ? "Adopted ✔️" : "Adopt"}
        </button>
      </div>

      {/* Toggle info panel */}
      <button onClick={onToggle}>
        {isInfoShown ? "Hide info 🔽" : "Show info 🔼"}
      </button>

      {/* Info panel */}
      <div
        className={`${styles.infoContainer} ${isInfoShown ? styles.show : ""}`}
      >
        <h3>Cuddles: {"❤️".repeat(cat.affection_level)}</h3>
        <h3>Child Friendly: {"👶".repeat(cat.child_friendly)}</h3>
        <h3>Energetic: {"⚡".repeat(cat.energy_level)}</h3>
        <h3>Intelligence: {"🧠".repeat(cat.intelligence)}</h3>
      </div>
    </div>
  );
};

export default CatCard;
