function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // Start from the second element because index 0 is "sorted"
    // If you use i < arr.length - 1, the loop will stop one element too early
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}
module.exports = insertionSort;
