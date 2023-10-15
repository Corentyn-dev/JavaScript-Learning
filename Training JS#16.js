//Creation of a function that takes an array of strings and returns an array with the same strings but with the minimum length of the strings in the array.

//Example:
arr = ["ab", "cde", "fghijk", "lmno", "pqrstu"];


//Solution:
function cutIt(arr) {
    //Variables
  let minStr = "";
  let minCountStr;
  let currentStr = "";
  let letterCount;
  let minArr = [];

    //Initial value of the minimum string
  minStr = arr[0];
  minCountStr = minStr.length;

    //Loop to find the minimum string
  for (i = 0; i < arr.length; i++) {
    currentStr = arr[i];
    letterCount = currentStr.length;

    //If the current string is less than the minimum string, the minimum string is replaced by the current string
    if (letterCount < minCountStr) {
      minCountStr = letterCount;
    }
  }

    //Loop to create the array with the minimum strings
  for (i = 0; i < arr.length; i++) {
    minArr.push(arr[i].slice(0, minCountStr));
  }
  //Return the array with the minimum strings
  return minArr;
}
