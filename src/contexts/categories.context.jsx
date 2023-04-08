import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    try {
      const getCategiresMap = async () => {
        const categoryMap = await getCategoriesAndDocuments();
        setCategoriesMap(categoryMap);
      };

      getCategiresMap();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
