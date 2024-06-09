/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr) {
  let start = 0;
  let end = arr.length - 1;
  [arr[end], arr[start]] = [arr[start], arr[end]];
  let pivot_num = arr[end];

  if (start >= end) {
    return start;
  }

  let i_pivot = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot_num) {
      [arr[i], arr[i_pivot]] = [arr[i_pivot], arr[i]];
      i_pivot += 1;
    }
  }

  [arr[end], arr[i_pivot]] = [arr[i_pivot], arr[end]];
  return i_pivot;
}

/*
quickSort accepts an array, left index, and right index
*/
function pivot_helper(arr, start, end) {
  if (start >= end) {
    return start;
  }

  let pivot_num = arr[end];
  let i_pivot = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot_num) {
      [arr[i], arr[i_pivot]] = [arr[i_pivot], arr[i]];
      i_pivot += 1;
    }
  }

  [arr[end], arr[i_pivot]] = [arr[i_pivot], arr[end]];
  pivot_helper(arr, start, i_pivot - 1);
  pivot_helper(arr, i_pivot + 1, end);
  return i_pivot;
}

function quickSort(arr) {
  pivot_helper(arr, 0, arr.length - 1);
  return arr;
}

module.exports = { quickSort, pivot };
