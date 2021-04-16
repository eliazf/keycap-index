import React, { useContext } from "react";

import Item from "./Item";

import {SearchContext} from "../SearchContext"

import itemData from "./data/itemData.json";

function SearchItems() {
  const {sortMethod} = useContext(SearchContext)

  if(sortMethod !== ""){
    itemData.sort((a, b) => {
      if(sortMethod === "priceLowest"){
        if(a.price < b.price){
          return -1
        }
        if(a.price > b.price){
          return 1
        }
        return 0
      }
  
      if(sortMethod === "priceHighest"){
        if(a.price < b.price){
          return 1
        }
        if(a.price > b.price){
          return -1
        }
        return 0
      }
    })
  }
  

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
