import React from "react";

function Item(props) {
  var testTagsArray = ["blue", "red", "plastic", "qwerty"];

  const tags = testTagsArray.map((tag) => <li>{tag}</li>);

  console.log(props.url);

  return (
    <div>
      <img src={props.url} alt="keycap-img"></img>
      <h3>{props.name}</h3>
      <h4>{props.price}</h4>
      <ul>{tags}</ul>
    </div>
  );
}

export default Item;
