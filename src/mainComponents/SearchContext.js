import React, { useState } from "react";

export const SearchContext = React.createContext();

export function SearchContextProvider({ children }) {
  const [selectedTags, setSelectedTags] = useState({
    color: [],
    brand: [],
    material: [],
  });

  //da fixare
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

  console.log(selectedTags);

  return (
    <SearchContext.Provider value={{ selectedTags, addRemoveTag }}>
      {children}
    </SearchContext.Provider>
  );
}
