import React from "react";

function TagClass(props) {
  console.log(props);
  const tags = props.tags.map((tag) => (
    <label>
      <input type="checkbox" name="checkbox" value="value" />
      <p>{tag}</p>
    </label>
  ));
  return (
    <div className="tag-classes">
      <h3>{props.title}</h3>
      <ul className={props.cssClass}>{tags}</ul>
    </div>
  );
}

export default TagClass;
