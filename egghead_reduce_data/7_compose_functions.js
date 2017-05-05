// suppose we have these basic math functions
var increment = input => input+1;
var decrement = input => input-1;
var double = input => 2*input;
var halve = input => input/2;

// suppose we need to incremenet, double, then decrement a value
// naively, we can do the following

var initialVal = 1;
var incrementedVal = increment(initialVal);
var doubledVal = double(incrementedVal);
var finalVal = decrement(doubledVal);

console.log(finalVal);

// this is pretty bad...
// We could also do this

function transform(input) {
  return ((input + 1) * 2) -1;
}

console.log(transform(initialVal));

// This isn't bad, but isn't great either
// We should create a pipeline: a series of functions applied to an initial value

// our pipeline is just our functions, in the order we want to use them
var pipeline = [
  increment,
  double,
  decrement
];

var finalVal = pipeline.reduce(function(acc, fn) {
  return fn(acc);
}, initialVal);

console.log(finalVal);

// Yay! this is way cooler! Because this is totally composed.
// We could have pipeline programmatically generated!

var pipeline2 = [
  increment,
  increment,
  increment,
  double,
  increment,
  increment,
  halve
];

// We can only do more complex transformations this way,
// imagine doing this manually!!


var finalVal = pipeline2.reduce(function(acc, fn) {
  return fn(acc);
}, initialVal);

console.log(finalVal);

// This is reminiscent of pipeline in UNIX
// initialVal | increment | increment | increment | double | ... | halve
