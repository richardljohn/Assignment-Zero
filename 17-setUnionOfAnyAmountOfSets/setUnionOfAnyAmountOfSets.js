function setUnionOfAnyAmountOfSets(...args) {
  let newSet = new Set();
  for(var i = 0; i < args.length; i++){
    for(const elem of args[i]){
      newSet.add(elem);
    }
  }
  return newSet;
}

console.log(setUnionOfAnyAmountOfSets([1, 2, 4 ], [4, 5, 6 ], [ 6, 7, 8 ]));

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;