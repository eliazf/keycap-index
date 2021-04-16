function useIsCorrispondent(selectedTags, keycapTags) {
  //AND for different types of tags
  //OR for elements of the same type of tags

  for (let i in keycapTags) {
    if (keycapTags[i] instanceof Array) {
      if (selectedTags[i].some((tag) => keycapTags[i].includes(tag))) {
      } else if (selectedTags[i].length === 0) {
      } else return false;
    } else {
      if (selectedTags[i].some((tag) => tag === keycapTags[i])) {
      } else if (selectedTags[i].length === 0) {
      } else return false;
    }
  }

  return true;
}

export default useIsCorrispondent;
