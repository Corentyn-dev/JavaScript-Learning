//Creation of an object with 3 properties and a function that returns a string with the properties of the object

//Creation of an object with 3 properties
var obj = { name: "dog", legs: 4, color: "white" };

//Function that returns a string with the properties of the object
function animal(obj) {
    return "This " + obj.color + " " + obj.name + " has " + obj.legs + " legs.";
}
