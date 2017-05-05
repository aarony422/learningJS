/*
 * Transform an array into a single value using reduce
*/

// common example

var data = [15, 3, 20];

var reducer = function(accumulator, item) {
  return accumulator + item;
}

var initialValue = 0;

var total = data.reduce(reducer, initialValue); // Array.reduce will eval to final value of accumulator
console.log("The sum is", total);
