// Reverse an Array in groups of given size

const reverseInGroup = (arr, size) => {
  for (let i = 0; i < arr.length; i = i + size) {

    let left = i ;
    let right = Math.min(left+size-1, arr.length-1);

    while(right > left){
       [arr[left],arr[right]] = [arr[right],arr[left]]
       left += 1;
       right -=1;
    }

  }
};

const array = [1, 2, 3, 4, 5, 6, 7, 8];
reverseInGroup(array, 4);