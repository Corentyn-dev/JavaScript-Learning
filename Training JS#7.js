/* 
 * Creation of a function that returns the price of the hot dogs according to the number of hot dogs bought.
 * If the number of hot dogs is greater than or equal to 5, the price is 95 cents.
 * If the number of hot dogs is greater than or equal to 10, the price is 90 cents.
 * If the number of hot dogs is less than 5, the price is 100 cents.
 */

//Creation of a variable that will contain the number of hot dogs bought.
var n = 7;

//Creation of a function that returns the price of the hot dogs according to the number of hot dogs bought.
function saleHotdogs(n) {
    if (n < 5) {
        return n * 100
    }

    else if (n >= 5 && n < 10) {
        return n * 95
    }

    else {
        return n * 90
    }
}