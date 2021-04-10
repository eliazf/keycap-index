import React from "react";
import TagClass from "./TagClass";

function SearchTags() {
  return (
    <div id="search-tag-div">
      <TagClass title="Color" tags={["red", "blue", "green"]} id="color-tag" />
      <TagClass
        title="Brand"
        tags={["Ducky", "Xuebay", "Bangood", "Mechzone"]}
        id="brand-tag"
      />
      <TagClass
        title="Material"
        tags={["ABS", "PBT", "Policarbonate", "PVC"]}
        id="material-tag"
      />
    </div>
  );
}

export default SearchTags;
