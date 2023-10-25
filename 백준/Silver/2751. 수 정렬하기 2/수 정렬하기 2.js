let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, ...origin] = input.map(Number);

function mergeSort(arr, first, last) {
  if (first < last) {
    let mid = Math.floor((first + last)/2);

    mergeSort(arr, first, mid);
    mergeSort(arr, mid + 1, last);
    merge(arr, first, mid, last);
  }

  return arr;
}

function merge(arr, first, mid, last) {
  const sorted = [];
  let currentIndex = 0;
  let leftIndex = first;
  let rightIndex = mid + 1;

  while (leftIndex <= mid && rightIndex <= last) {
    if (arr[leftIndex] < arr[rightIndex]) {
      sorted[currentIndex++] = arr[leftIndex++];
    } else {
      sorted[currentIndex++] = arr[rightIndex++];
    }
  }

  while (leftIndex <= mid) {
    sorted[currentIndex++] = arr[leftIndex++];
  }

  while (rightIndex <= last) {
    sorted[currentIndex++] = arr[rightIndex++];
  }

  for (let i = first; i <= last ; i++) {
    arr[i] = sorted[i - first];
  }
}

const mergeSorted = mergeSort(origin, 0, origin.length - 1);
console.log(mergeSorted.join("\n"));
