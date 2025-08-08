//find the third largest element return -1 if not precent.
const findThirdLargest = (arr) =>{
    let first = -1;
    let second = -1;
    let third = -1;

    for(i=0; i<arr.length; i++){
        if (arr[i] > first){
            third = second;
            second = first;
            first = arr[i];
        }else if (arr[i] < first && arr[i] > second){
            third = second;
            second = arr[i];
        }else if (arr[i] < second && arr[i] > third){
            third = arr[i];
        }
    }
    
    return third;
}

const arr = [1,2,3,45,5,7]
console.log(findThirdLargest(arr));
