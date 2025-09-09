import { useContext, useEffect } from "react";
import { fetchCats } from "../api/api";
import CatCard from "./CatCard";
import styles from "./Main.module.css";
import CatsContext from "./Context/CatsContext";

const Main = ({
  selectedCatId,
  handleToggle,
  searchedCatResults,
  searchedCat,
}) => {
  const { cats, setCats } = useContext(CatsContext);

  useEffect(() => {
    const getCats = async () => {
      const data = await fetchCats();
      if (!data) return;
      const updated = data.map((cat) => ({
        ...cat,
        liked: false,
        adopted: false,
      }));
      setCats(updated);
    };
    getCats();
  }, [setCats]);

  return (
    <div className={styles.cardsContainer}>
      {searchedCatResults.length > 0 && searchedCat
        ? searchedCatResults.map((cat) => (
            <CatCard
              key={cat.id}
              cat={cat}
              isInfoShown={selectedCatId === cat.id}
              onToggle={() => handleToggle(cat.id)}
            />
          ))
        : cats.map((cat) => (
            <CatCard
              key={cat.id}
              cat={cat}
              isInfoShown={selectedCatId === cat.id}
              onToggle={() => handleToggle(cat.id)}
            />
          ))}
    </div>
  );
};

export default Main;
