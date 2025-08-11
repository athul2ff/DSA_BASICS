// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

const duplicateZeros = (arr) => {
  const n = arr.length;
  let zeros = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) zeros++;
  }

  let i = n - 1;
  let j = n - 1 + zeros;

  while (i >= 0) {
    if (j < n) {
      arr[j] = arr[i];
    }

    if (arr[i] === 0) {
      j--;
      if (j < n) {
        arr[j] = 0;
      }
    }

    i--;
    j--;
  }
};

const arr = [1, 0, 2];
console.log(duplicateZeros(arr));
