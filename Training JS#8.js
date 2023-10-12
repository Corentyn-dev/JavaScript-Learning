/*
 * Creation of a function that returns the number of days in a month thanks to a switch method. 
 */


//Creation of a function that returns the number of days in a month thanks to a switch method.
function howManydays(month) {

    //Creation of a variable that will contain the number of days in a month.
    var days;

    //Creation of a switch method that will return the number of days in a month.
    switch (month) {
        case 4:
            days = 30;
            break;

        case 6:
            days = 30;
            break;

        case 9:
            days = 30;
            break;

        case 11:
            days = 30;
            break;

        case 2:
            days = 28;
            break;

        default:
            days = 31;
    }
    return days;
}