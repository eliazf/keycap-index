import React from "react";

import { SearchContextProvider } from "./SearchContext";

import SearchItems from "./SearchPageComponents/SearchItems";
import SearchTags from "./SearchPageComponents/SearchTags";

import "../styles/Search.scss";

function Search() {
  return (
    <SearchContextProvider>
      <div id="search-page-div">
        <SearchTags />
        <SearchItems />
      </div>
    </SearchContextProvider>
  );
}

export default Search;
