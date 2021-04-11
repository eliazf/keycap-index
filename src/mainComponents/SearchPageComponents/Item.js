import React, { useContext } from "react";

import { SearchContext } from "../SearchContext";

import useIsSubset from "./useIsSubset";

function Item(props) {
  const { selectedTags } = useContext(SearchContext);
  const isCorrispondent = useIsSubset(props.tags, selectedTags);
  const tags = props.tags.map((tag) => <li>{tag}</li>);

  const component = isCorrispondent ? (
    <div className="item">
      <img src={props.imgUrl} alt="keycap-img"></img>
      <h3 className="item-title">{props.name}</h3>
      <h4 className="item-price">{props.price}</h4>
      <ul>{tags}</ul>
    </div>
  ) : null;
  return component;
}

export default Item;
