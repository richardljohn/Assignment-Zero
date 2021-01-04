function setUnionOfAnyAmountOfSets(...args) {
  let newSet = new Set();
  for(var i = 0; i < args.length; i++){
    for(const elem of args[i]){
        newSet.add(elem);
    }
  }
  return newSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;