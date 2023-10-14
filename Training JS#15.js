//Creation of a function that returns the number of times a number is smaller than a given number in an array

//Creation of variables
arr = [1.234, 1.235, 1.228];
n = 1.24;

//Creation of the function
function howManySmaller(arr, n) {
  let minusCount = 0;

  //Creation of a loop that goes through the array
  for (i = 0; i < arr.length; i++) {
    let number = 0;

    //Creation of a variable that rounds the number to 2 decimal places
    number = arr[i];
    arr[i] = number.toFixed(2);

    //Creation of a condition that checks if the number is smaller than n
    if (arr[i] < n) {
      minusCount = minusCount + 1;
    }
  }
  //Return of the number of times a number is smaller than a given number in an array
  return minusCount;
}