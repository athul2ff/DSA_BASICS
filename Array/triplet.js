// Maximum product of a triplet (subsequence of size 3) in array

const maxTriplet = (arr) => {
    let maxA = Number.MIN_SAFE_INTEGER;
    let maxB = Number.MIN_SAFE_INTEGER;
    let maxC = Number.MIN_SAFE_INTEGER;

    let minA = Number.MAX_SAFE_INTEGER;
    let minB = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i<arr.length; i++){
        if(arr[i] > maxA){
            maxC = maxB;
            maxB = maxA;
            maxA = arr[i];
        }else if (arr[i] > maxB ) {
           maxC = maxB;
           maxB = arr[i];
        }else if(arr[i] > maxC){
           maxC = arr[i];
        }

        if(arr[i] < minA) {
            minB = minA;
            minA = arr[i];
        }else if (arr[i] < minB){
            minB = arr[i];
        }

    }

  return Math.max(minA * minB * maxA, maxA,maxB,maxC)
 
}

let arr = [-10,-3,5,6,-20];
console.log(maxTriplet(arr),"sdfsdf");
