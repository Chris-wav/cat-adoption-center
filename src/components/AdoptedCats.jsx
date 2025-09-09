import { useContext } from "react";
import CatCard from "./CatCard";
import styles from "./AdoptedCats.module.css";
import CatsContext from "./Context/CatsContext";
import ErrorHandling from "./ErrorHandling";

const AdoptedCats = ({ handleToggle, selectedCatId }) => {
  const { adoptedCats } = useContext(CatsContext);

  return (
    <>
      {adoptedCats.length === 0 ? (
        <ErrorHandling message="No adopted cats yet!" />
      ) : (
        <div className={styles.cardsContainer}>
          {adoptedCats.map((cat) => (
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

export default AdoptedCats;
