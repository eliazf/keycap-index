import React, { useContext } from "react";

import Item from "./Item";

import { SearchContext } from "../SearchContext";

import itemData from "./data/itemData.json";

function SearchItems() {
  const { selectedTags } = useContext(SearchContext);

  const items = itemData.map((item) => {
    if (item.tags.some((_item) => selectedTags.includes(_item)))
      return (
        <Item
          name={item.name}
          price={item.price}
          imgUrl={item.url}
          tags={item.tags}
        />
      );
    else return null;
  });
  return <div id="search-items-div">{items}</div>;
}

export default SearchItems;
