function merge(arr1, arr2) {
  let arr = new Array();
  let i = 0;
  let j = 0;

  while (arr1[i] != undefined && arr2[j] != undefined) {
    if (arr1[i] <= arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }

  arr.push(...arr1.slice(i));
  arr.push(...arr2.slice(j));

  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);

  let x = mergeSort(arr.slice(0, mid));
  let y = mergeSort(arr.slice(mid));

  return merge(x, y);
}

module.exports = { merge, mergeSort };
