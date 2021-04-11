import React from "react";
import TagClass from "./TagClass";

import tagData from "./data/tagData.json";

function SearchTags() {
  const tags = tagData.map((tag) => (
    <TagClass title={tag.title} tags={tag.tags} cssClass={tag.cssClass} />
  ));

  return <div id="search-tag-div">{tags}</div>;
}

export default SearchTags;
