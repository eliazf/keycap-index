import React from "react";

import Item from "./Item";

import itemData from "./data/itemData.json";

function SearchItems() {
  const items = itemData.map((item) => (
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
