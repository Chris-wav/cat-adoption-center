import CatsContext from "./CatsContext";
import { useState, useMemo } from "react";
const CatsProvider = ({ children }) => {
  const [cats, setCats] = useState([]);
  const favouriteCats = useMemo(() => {
    return cats.filter((cat) => cat.liked);
  }, [cats]);
  const adoptedCats = useMemo(() => {
    return cats.filter((cat) => cat.adopted);
  }, [cats]);
  return (
    <CatsContext.Provider value={{ cats, setCats, favouriteCats, adoptedCats }}>
      {children}
    </CatsContext.Provider>
  );
};

export default CatsProvider;
