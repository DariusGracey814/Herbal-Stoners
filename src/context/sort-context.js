import { createContext, useState } from "react";

export const SortContext = createContext({
  sort: false,
  setSortProducts: () => {},
});

function SortCartProvider({ children }) {
  const [sort, setSort] = useState(false);

  // Set sort products state
  function setSortProducts(state) {
    setSort(state);
  }

  const sortItems = {
    sort: sort,
    setSortProducts,
  };

  return (
    <SortContext.Provider value={sortItems}>{children}</SortContext.Provider>
  );
}

export default SortCartProvider;
