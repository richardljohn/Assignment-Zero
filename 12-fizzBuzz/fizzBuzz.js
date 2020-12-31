function fizzBuzz(start, end) {
  var arr = [];
  var arrayIndex = 0;
  for(start; start <= end; start++){
    if((start % 3 == 0) && (start % 5 == 0)){
      arr[arrayIndex] = "FizzBuzz";
    }
    else if(start % 3 == 0){
      arr[arrayIndex] = "Fizz";
    }
    else if(start % 5 == 0) {
      arr[arrayIndex] = "Buzz";
    }
    else {
      arr[arrayIndex] = start;
    }
    arrayIndex++;
  }
  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;