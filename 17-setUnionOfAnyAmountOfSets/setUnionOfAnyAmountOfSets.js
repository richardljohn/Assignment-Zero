function setUnionOfAnyAmountOfSets(...args) {
  let newSet = new Set();
  for(var i = 0; i < args.length; i++){
    newSet.union(newSet, args[i]);
  }
  return newSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;