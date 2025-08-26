// Rotate an Array by d - Counterclockwise or Left

const rotateArrayByd = (arr, d) => {
  for (let i = 0; i < d; i++) {

    const temp = arr[0];

    arr.shift();
    arr.push(temp);
  }

  return arr;
};

const arr = [1, 2, 3];
console.log(rotateArrayByd(arr, 4));
