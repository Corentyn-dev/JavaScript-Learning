//Creation of a function that separates odd and even numbers in an array thanks to the filter method

//Creation of an array with numbers
var arr = [1, 2, 3, 4, 5, 6, 12, 15, 17];

//Creation of a function that separates odd and even numbers in an array
function pickIt(arr) {
  var odd = [],
    even = [];

  //Creation of a loop that goes through the array
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  return [odd, even];
}
