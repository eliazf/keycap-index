import React from "react";

import SearchItems from "./SearchPageComponents/SearchItems";
import SearchTags from "./SearchPageComponents/SearchTags";

import "../styles/Search.scss";

function Search() {
  return (
    <div id="search-page-div">
      <SearchTags />
      <SearchItems />
    </div>
  );
}

export default Search;
