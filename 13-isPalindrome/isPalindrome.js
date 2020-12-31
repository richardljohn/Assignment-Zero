function isPalindrome(word) {
  var reverse = "";
  var w = 0;
  for(var i = word.length-1; i >= 0; i--){
    if(word[w] != word.charAt(i)){
      return false;
    }
    reverse += word.charAt(i);
    w++;
  }
  return true; 
}

// Do not edit this line;
module.exports = isPalindrome;