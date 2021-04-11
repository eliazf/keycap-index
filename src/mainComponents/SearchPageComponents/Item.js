import React from "react";

function Item(props) {
  const tags = props.tags.map((tag) => <li>{tag}</li>);

  console.log(props.url);

  return (
    <div className="item">
      <img src={props.imgUrl} alt="keycap-img"></img>
      <h3 className="item-title">{props.name}</h3>
      <h4 className="item-price">{props.price}</h4>
      <ul>{tags}</ul>
    </div>
  );
}

export default Item;
