//Creation of a function that returns an array of all the values of the object that have a length of 5

//Creation of the object
var obj = {'Planet': 'Earth', 'System': 'automation', 'channel': 'BFM TV', 'd': 'd', 'e': 'e'};

//Creation of the function that returns an array of all the values of the object that have a length of 5
function giveMeFive(obj) {
  var five = [];

  //Loop that goes through the object and checks if the key or the value has a length of 5
  for (var key in obj) {

    //If the key has a length of 5, it is added to the array
    if (key.length == 5) {
      five.push(key);
    }

    //If the value has a length of 5, it is added to the array
    if (obj[key].length == 5) {
      five.push(obj[key]);
    }
  }

  return five;
}
