import React, { useState } from "react";

export const SearchContext = React.createContext();

export function SearchContextProvider({ children }) {
  const [selectedTags, setSelectedTags] = useState([]);

  function addRemoveTag(tag) {
    if (!selectedTags.some((currentTag) => currentTag === tag)) {
      console.log("i-m in");
      setSelectedTags((prevTags) => [...prevTags, tag]);
    } else {
      setSelectedTags((prevTags) => prevTags.filter((_tag) => _tag !== tag));
    }
  }

  console.log(selectedTags);

  return (
    <SearchContext.Provider value={{ selectedTags, addRemoveTag }}>
      {children}
    </SearchContext.Provider>
  );
}
