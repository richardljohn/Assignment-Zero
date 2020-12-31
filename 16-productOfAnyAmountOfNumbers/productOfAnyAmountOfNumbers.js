function productOfAnyAmountOfNumbers(...args) {
  var product = 1;
  for(var i = 0; i < args.length; i++){
    if(Array.isArray(args[i]) === true){
      var a = args[i];
      for(var j = 0; j < a.length; j++){
        product *= a[j];
      }
    }
    else {
      product *= args[i];
    }
  }
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;