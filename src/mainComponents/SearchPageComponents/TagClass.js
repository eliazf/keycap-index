import React from "react";

function TagClass(props) {
  const tags = props.tags.map((tag) => (
    <label>
      <input type="checkbox" name="checkbox" value="value" />
      <p>{tag}</p>
    </label>
  ));
  return (
    <div id={props.id} className="tag-classes">
      <h3>{props.title}</h3>
      <ul>{tags}</ul>
    </div>
  );
}

export default TagClass;
