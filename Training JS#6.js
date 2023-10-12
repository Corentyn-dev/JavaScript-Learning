//Creation of a function that returns true or false depending on the value of the parameter

//Creation of the variable val and initialization to 0
val = 0;

//Call of the function trueOrFalse with the variable val as parameter
function trueOrFalse(val) {
    if (val == 0 || val == null || val == undefined) return "false";
    else return "true";
}