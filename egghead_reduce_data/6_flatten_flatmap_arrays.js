// Let's talk about a couple of patterns for reduction
// flatten: suppose you have an array of arrays
// take a list of lists, and return a single list of those elements

var data = [[1,2,3], [4,5,6], [7,8,9]];
var flattenedData = data.reduce(function(acc, value) {
  return acc.concat(value);
}, []);

console.log(flattenedData);

// Great! But in practice, data will be more complex
// Next pattern: list of complex objects
// Suppose we have an array of movie objects

var movies = [
  {
    title: "How i met your mother",
    cast: ["Aaron", "Ruben", "Kendra"]
  },
  {
    title: "The Notebook",
    cast: ["Aaron", "Eric", "Kendra"]
  },
  {
    title: "Dear white people",
    cast: ["Aaron", "Ruben", "Eric"]
  }
];

// We'd like to get a list of the stars, with no repeats
// naively, we can do the following

var stars = movies.reduce(function(acc, val) {
  return acc.concat(val.cast);
}, []);
console.log(stars); // Cool, but we have repeats

// We can do the followling

var stars2 = movies.reduce(function(acc, val) {
  val.cast.forEach(function(star) { // check if current val is in acc first
    if (acc.indexOf(star) === -1) { // if not, add it
      acc.push(star);
    }
  });
  return acc;
}, []);
console.log(stars2);

// Another pattern

var data = [1,2,3,4, "5"];
var sum = data.reduce(function(acc, val, index) {
  console.log(index);
  return acc + val;
}, 0);
// 0,1,2,3,4
console.log(sum); // 105

// How if you needed to start with the last array element in reduce?
// and go backwards

var sum = data.reduceRight(function(acc, val, index) {
  console.log(index);
  return acc + val;
}, 0);
// 4,3,2,1,0
console.log(sum); // 054321
