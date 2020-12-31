function countOfAllBooleansAndStrings(arr) {
  var count = 0;
  for(var i = 0; i < arr.length; i++){
    if((typeof arr[i] == 'boolean') || (typeof arr[i] == 'string')){
      count++;
    }
  }
  return count;
}

console.log(countOfAllBooleansAndStrings(["hey", "there", "hello", "there", "world", false]));

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;