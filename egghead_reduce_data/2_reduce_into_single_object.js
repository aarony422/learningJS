/*
 *
*/

// suppose sampled people's favorite web framework
// you want number of votes for each framework
var votes = [
  "angular",
  "angular",
  "react",
  "react",
  "ember",
  "vanilla"
];

// You want to turn an array, into an object: think reduce
var initialValue = {};

// tally is the object return the last time the reducer is run
// vote is each of the elements in the array
var reducer = function(tally, vote) {
  if (!tally[vote]) {
    tally[vote] = 1;
  } else {
    tally[vote] = tally[vote] + 1;
  }
  return tally;
};

var result = votes.reduce(reducer, initialValue);

console.log(result);
