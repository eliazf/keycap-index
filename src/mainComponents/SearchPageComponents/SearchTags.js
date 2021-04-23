import React, { useContext } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

import { SearchContext } from "../SearchContext";

import TagClass from "./TagClass";

import tagData from "./data/tagData.json";

function SearchTags() {
  const { setSortMethod, priceRange, setPriceRange } = useContext(
    SearchContext
  );
  const tags = tagData.map((tag) => (
    <TagClass title={tag.title} tags={tag.tags} cssClass={tag.cssClass} />
  ));

  return (
    <div id="search-tag-div">
      <select
        className=" tag-classes"
        id="select-order"
        name="sort-method"
        onChange={(e) => setSortMethod(e.target.value)}
      >
        <option value="priceLowest">Price (lowest)</option>
        <option value="priceHighest">Price (highest)</option>
      </select>

      <div id="price-range" className=" tag-classes">
        <p>Price Range</p>
        <Range
          min={0}
          max={60}
          value={[priceRange[0], priceRange[1]]}
          defaultValue={[0, 60]}
          onChange={(value) => setPriceRange(value)}
        />
      </div>

      {tags}
    </div>
  );
}

export default SearchTags;
