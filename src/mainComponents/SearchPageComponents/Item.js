import React, { useContext } from "react";

import { SearchContext } from "../SearchContext";

import useIsCorrispondent from "./useIsCorrispondent";

function Item(props) {
  const { selectedTags } = useContext(SearchContext);
  const isCorrispondent = useIsCorrispondent(selectedTags, props.tags);
  const tags = [
    props.tags.color.map((colorTag) => <li>{colorTag}</li>),
    <li>{props.tags.brand}</li>,
    <li>{props.tags.material}</li>,
  ];

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
