class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  // binarySearch(nums, target) {
  //   let mid = (nums.length)/2;
  //   if(nums.length = 1){
  //     if(target === nums[0]){
  //       return true;
  //     } 
  //   }
  //   if(target === nums[mid]){
  //     return true;
  //   }
  //   else if(target > nums[mid]){
  //     return this.binarySearch(nums.splice(mid+1, nums.length), target);
  //   }
  //   else {
  //     return this.binarySearch(nums.splice(0, mid), target);
  //   }
  // }
  binarySearch(nums, target, start, end){
    if(start > end){
      return false;
    }
    var mid = Math.floor((start+end)/2);
    if(nums[mid] == target){
      return true; 
    }
    else if(target > nums[mid]){
      return this.binarySearch(nums, target, mid+1, end);
    }
    else if(target < nums[mid]){
      return this.binarySearch(nums, target, start, mid-1);
    }
  }
}

let solution = new MySolution();
let arr = [1,2,3,4,5];
console.log(solution.binarySearch(arr, 0, 0, arr.length));

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;