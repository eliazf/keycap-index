import React, { useContext } from "react";

import Item from "./Item";

import { SearchContext } from "../SearchContext";

function SearchItems() {
  const { itemData, sortMethod, priceRange } = useContext(SearchContext);

  const filteredItems = itemData.filter(
    (item) => priceRange[0] < item.price && item.price < priceRange[1]
  );

  if (sortMethod !== "") {
    filteredItems.sort((a, b) => {
      if (sortMethod === "priceLowest") {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      }

      if (sortMethod === "priceHighest") {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      }
    });
  }

  const items = filteredItems.map((item) => (
    <Item
      name={item.name}
      price={item.price}
      imgUrl={item.url}
      tags={item.tags}
    />
  ));

  return <div id="search-items-div">{items}</div>;
}

export default SearchItems;
