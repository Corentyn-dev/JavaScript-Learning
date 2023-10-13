//Creation of a function that returns the type of the number passed as argument

//Examples:
//n = 1 / 0; //Number.POSITIVE_INFINITY
//n = 100; //Number
//n = 1.7976931348623157e308; //Number.MAX_VALUE
//n = 5e-324; //Number.MIN_VALUE
//n = -Infinity; //Number.NEGATIVE_INFINITY
//n = Infinity; //Number.POSITIVE_INFINITY
n = NaN; //Number.NaN

//Solution:
function whatNumberIsIt(n) {
  switch (true) {
    case n == Number.MAX_VALUE:
      return "Input number is Number.MAX_VALUE";
      break;

    case n == Number.MIN_VALUE:
      return "Input number is Number.MIN_VALUE";
      break;

    case isNaN(n):
      return "Input number is Number.NaN";
      break;

    case n == Number.NEGATIVE_INFINITY:
      return "Input number is Number.NEGATIVE_INFINITY";
      break;

    case n == Number.POSITIVE_INFINITY:
      return "Input number is Number.POSITIVE_INFINITY";
      break;

    default:
      return "Input number is " + n;
  }
}
