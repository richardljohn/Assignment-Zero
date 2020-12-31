function titleCaseEdit(title) {
  let editedTitle = ""; 
  editedTitle += title.charAt(0).toUpperCase();
  for(var i = 1; i < title.length; i++){
    if(title.charAt(i-1) == " "){
      editedTitle += title.charAt(i).toUpperCase();
    }
    else {
      editedTitle += title.charAt(i);
    }
  }
  return editedTitle; 
}

// Do not edit this line;
module.exports = titleCaseEdit;