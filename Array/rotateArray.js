//rotate Array by k steps
const rotateArrybyKSteps = (nums, k) =>{
     k = k % nums.length; 
     console.log(k);
     
    const splicedItems = nums.splice(nums.length - k, k);
    nums.unshift(...splicedItems);
}
