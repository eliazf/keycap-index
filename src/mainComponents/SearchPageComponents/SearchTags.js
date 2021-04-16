import React, { useContext } from "react";
import TagClass from "./TagClass";

import {SearchContext} from "../SearchContext"

import tagData from "./data/tagData.json";

function SearchTags() {
  const {setSortMethod} = useContext(SearchContext)
  const tags = tagData.map((tag) => (
    <TagClass title={tag.title} tags={tag.tags} cssClass={tag.cssClass} />
  ));

  return <div id="search-tag-div">
    <select name="sort-method" onChange={(e) => setSortMethod(e.target.value)}>
      <option value="priceLowest">Price (lowest)</option>
      <option value="priceHighest">Price (highest)</option>
    </select>
      {tags}</div>;
}

export default SearchTags;
