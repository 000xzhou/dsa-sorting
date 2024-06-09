function selectionSort(arr) {
  console.log(arr);
  for (let j = 0; j < arr.length - 1; j++) {
    let min = j;
    for (let i = min + 1; i < arr.length; i++) {
      // if j+1 is less than j
      if (arr[i] < arr[min]) {
        min = i;
      }
    }
    // swap
    [arr[j], arr[min]] = [arr[min], arr[j]];

    // console.log("j:", j, arr[j], "min", min, arr[min]);
  }
  return arr;
}

module.exports = selectionSort;
