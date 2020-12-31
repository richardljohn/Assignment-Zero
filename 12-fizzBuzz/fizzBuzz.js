function fizzBuzz(start, end) {
  var arr = [];
  for(start; start <= end; start++){
    if((start % 3 == 0) && (start % 5 == 0)){
      arr[start] = "FizzBuzz";
    }
    else if(start % 3 == 0){
      arr[start] = "Fizz";
    }
    else if(start % 5 == 0) {
      arr[start] = "Buzz";
    }
    else {
      arr[start] = start;
    }
  }
  return arr;
}

console.log(fizzBuzz(1, 15));

// Do not edit this line;
module.exports = fizzBuzz;