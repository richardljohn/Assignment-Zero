function frequencyCounter(word) {
  var w = new Object();
  for(var i = 0; i < word.length; i++){
    key = word.charAt(i);
    if(w[key]){
      w[key]++;
    } else {
      w[key] = 1;
    }
  }
  return w; 
}

console.log(frequencyCounter("apple"));

// Do not edit this line;
module.exports = frequencyCounter;