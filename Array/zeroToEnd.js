// Move all zeros to end of array;

function moveToEnd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i];
    }

    while (count === arr.length - 1) {
      arr[count++] = 0;
    }
  }
}

const arr = [1, 0, 3, 4, 5];
moveToEnd(arr);
console.log(arr);
