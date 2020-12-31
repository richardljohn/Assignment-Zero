function pairSum(nums, target) {
  for(var i = 0; i < nums.length; i++){
    var num = nums[i];
    for(var j = 0; j < nums.length; j++){
      if(i != j){
        if(target == (num + nums[j])){
          return true;
        }
      }
    }
  }
  return false; 
}

// Do not edit this line;
module.exports = pairSum;