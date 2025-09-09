import { useContext } from "react";
import CatCard from "./CatCard";
import CatsContext from "./Context/CatsContext";
import ErrorHandling from "./ErrorHandling";
import styles from "./FavouriteCats.module.css"; // Βεβαιώσου ότι υπάρχει CSS

const FavouriteCats = ({ handleToggle, selectedCatId }) => {
  const { favouriteCats } = useContext(CatsContext);

  return (
    <>
      {favouriteCats.length === 0 ? (
        <ErrorHandling message="No favourite cats yet!" />
      ) : (
        <div className={styles.cardsContainer}>
          {favouriteCats.map((cat) => (
            <CatCard
              key={cat.id}
              cat={cat}
              isInfoShown={selectedCatId === cat.id}
              onToggle={() => handleToggle(cat.id)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default FavouriteCats;
