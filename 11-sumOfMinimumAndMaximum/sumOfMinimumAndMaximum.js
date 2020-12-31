function sumOfMinimumAndMaximum(nums) {
  var max = nums[0];
  var min = nums[0];
  for(var i = 0; i < nums.length; i++){
    if(max < nums[i]){
      max = nums[i];
    }
    if(min > nums[i]){
      max = nums[i];
    }
  }
  return max + min;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;