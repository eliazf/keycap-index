import React, { useContext } from "react";

import { SearchContext } from "../SearchContext";

function TagClass(props) {
  const { addRemoveTag } = useContext(SearchContext);
  const tags = props.tags.map((tag) => (
    <label>
      <input
        type="checkbox"
        name="checkbox"
        onChange={() => addRemoveTag(tag)}
      />
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
