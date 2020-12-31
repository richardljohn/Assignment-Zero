function countOfAllNumbersSmallerThanTarget(nums, target) {
  var count = 0;
  for(var i = 0; i < nums.length; i++){
    if(nums[i] < target){
      count++;
    }
  }
  return count; 
}

console.log(countOfAllNumbersSmallerThanTarget([1,5,3,2,20,18], 18));

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;