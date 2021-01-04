class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }
  binarySearch(nums, target){
    if(nums.length === 0){
      return false;
    }
    else { 
      var mid = Math.floor(nums.length/2);
      if(nums[mid] === target){
        return true; 
      }
      else if (nums[mid] > target) { 
        return this.binarySearch(nums.slice(0, mid), target);
      }
      else {
        return this.binarySearch(nums.slice(mid+1), target);
      }
    }
  }
}

let solution = new MySolution();
let arr = [1,2,3,4,5];
console.log(solution.binarySearch(arr, 9));

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;