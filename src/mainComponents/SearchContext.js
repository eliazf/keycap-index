import React, { useState } from "react";

import itemData from "./SearchPageComponents/data/itemData.json";

export const SearchContext = React.createContext();

export function SearchContextProvider({ children }) {
  const [selectedTags, setSelectedTags] = useState({
    color: [],
    brand: [],
    material: [],
  });

  const [sortMethod, setSortMethod] = useState("");

  const [priceRange, setPriceRange] = useState([0, 60]);

  function addRemoveTag(tagCategory, tag) {
    if (!selectedTags[tagCategory].some((_tag) => _tag === tag)) {
      setSelectedTags((prevTags) => {
        return { ...prevTags, [tagCategory]: [...prevTags.color, tag] };
      });
    } else {
      setSelectedTags((prevTags) => {
        return {
          ...prevTags,
          [tagCategory]: prevTags[tagCategory].filter((_tag) => _tag !== tag),
        };
      });
    }
  }

  return (
    <SearchContext.Provider
      value={{
        itemData,
        selectedTags,
        addRemoveTag,
        sortMethod,
        setSortMethod,
        priceRange,
        setPriceRange,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
