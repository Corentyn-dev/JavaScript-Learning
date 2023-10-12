/* Creating some functions to work with arrays */

// Return the number of items in an array
function getLength(arr) {
    return arr.length;
}

// Return the first item in an array
function getFirst(arr) {
    return arr[0];
}

// Return the last item in an array
function getLast(arr) {
    return arr[arr.length - 1];
}

// Return the item at a given position in an array
function pushElement(arr) {
    var el = 1;
    arr.push(el);
    return arr;
}

// Return the item at a given position in an array
function popElement(arr) {
    arr.pop();
    return arr;
}