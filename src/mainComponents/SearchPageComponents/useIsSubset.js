function useIsSubset(arr1, arr2) {
  // JavaScript program to find whether an array
  // is subset of another array

  /* Return true if arr2[] is a subset
    of arr1[] */
  function isSubset(arr1, arr2, m, n) {
    let i = 0;
    let j = 0;
    for (i = 0; i < n; i++) {
      for (j = 0; j < m; j++) if (arr2[i] === arr1[j]) break;

      /* If the above inner loop
            was not broken at all then
            arr2[i] is not present in
            arr1[] */
      if (j === m) return false;
    }

    /* If we reach here then all
        elements of arr2[] are present
        in arr1[] */
    return true;
  }

  // Driver Code

  let m = arr1.length;
  let n = arr2.length;

  if (isSubset(arr1, arr2, m, n)) return true;
  else return false;
}
export default useIsSubset;
