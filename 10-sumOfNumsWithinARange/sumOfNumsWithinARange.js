function sumOfNumsWithinARange(nums, start, end) {
  var count = 0;
  for(var i = 0; i < nums.length; i++) {
    if((nums[i] >= start) && (nums[i] <= end)){
      count++;
    }
  }
  return count;
}

console.log(sumOfNumsWithinARange([2,4,5,6,23], 4, 6));

// Do not edit this line;
module.exports = sumOfNumsWithinARange;