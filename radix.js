function radixSort(arr) {
  let maxElement = Math.max(...arr);
  let place = 1;

  while (Math.floor(maxElement / place) > 0) {
    sort(arr, place);
    place *= 10;
  }
  return arr;
}

function sort(arr, place) {
  let output = Array.from({ length: arr.length }, () => 0);
  let count = Array.from({ length: 10 }, () => 0);

  // Calculate count of elements based on current place value
  for (let i = 0; i < arr.length; i++) {
    let index = Math.floor(arr[i] / place) % 10;
    count[index]++;
  }

  // Calculate cumulative count
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Place the elements in sorted order based on current place value
  for (let i = arr.length - 1; i >= 0; i--) {
    let index = Math.floor(arr[i] / place) % 10;
    output[count[index] - 1] = arr[i];
    count[index]--;
  }

  // Copy the output array back to the original array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }

  return arr;
}

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  return num.toString().length;
}

function mostDigits(arr) {
  if (arr == 0) {
    return 0;
  }
  let max = Math.max(...arr);
  return max.toString().length;
}

module.exports = { radixSort, getDigit, digitCount, mostDigits };
