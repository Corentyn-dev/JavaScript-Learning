//Creation of a simple function that returns an array of 3 elements maximum, containing only "Hello Kitty" and "Barbie doll" if the array contains these elements, otherwise it returns an empty array.

//Creation of the array of dolls
var dolls = [
  "Ikea",
  "Ford",
  "Hello Kitty",
  "Kia",
  "Barbie doll",
  "Hello Kitty",
  "Bar",
];

//Creation of the function that returns the array
function grabDoll(dolls) {
  var bag = [];

  //Loop that goes through the array dolls and adds the elements to the bag array if they are "Hello Kitty" or "Barbie doll"
  for (i = 0; i < dolls.length; i++) {
    if (bag.length == 3) {
      //If the bag array has 3 elements, the loop stops
      break;
    } else {
      if (dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll") {
        bag.push(dolls[i]);
      } else {
        //If the element is not "Hello Kitty" or "Barbie doll", the loop continues
        continue;
      }
    }
  }

  return bag;
}
