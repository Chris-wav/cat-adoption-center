import { createContext } from "react";
const CatsContext = createContext({
  cats: [],
  setCats: () => {},
  favouriteCats: [],
  adoptedCats: [],
});

export default CatsContext;
