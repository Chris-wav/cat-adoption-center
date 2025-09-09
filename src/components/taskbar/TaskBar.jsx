import styles from "./TaskBar.module.css";
import { getFilteredCats } from "../../api/api";
import { useEffect } from "react";

const TaskBar = ({
  setSearchedCatResults,
  searchedCat,
  setView,
  setSearchedCat,
}) => {
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchedCat.trim()) {
        const results = await getFilteredCats(searchedCat);
        setSearchedCatResults(results);
      } else {
        setSearchedCatResults([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchedCat, setSearchedCatResults]);

  const handleInput = (e) => {
    setSearchedCat(e.target.value.toLowerCase());
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.searchWrapper}>
        <input
          className={styles.searchBar}
          type="text"
          value={searchedCat}
          placeholder="cat breed"
          onChange={handleInput}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.favouritesButton}
          onClick={() => setView("favourites")}
        >
          Show favourites
        </button>
        <button
          className={styles.adoptedButton}
          onClick={() => setView("adopted")}
        >
          Show adopted
        </button>
        <button
          className={styles.backToHomeButton}
          onClick={() => setView("home")}
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default TaskBar;
