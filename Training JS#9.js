/* Creation of a function that receives 2 parameters, a string and a number, 
 * and returns the string padded with asterisks on the left or right side depending on the number 
 * received as a parameter.
 */

//Creation of the function
function padIt(str, n) {
    //Creation of a while loop that will run while n is greater than 0
    while (n > 0) {
        //If n is even, it will add an asterisk to the end of the string
        if (n % 2 === 0) {
            str = str + "*";
        }
        //If n is odd, it will add an asterisk to the beginning of the string
        else {
            str = "*" + str;
        } 
        n--;
    }
    return str;
}