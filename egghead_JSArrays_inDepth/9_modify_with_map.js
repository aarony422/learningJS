// create a new array with the same length, with modified values

var items = [1,2,3,4,5];
var mapped = items.map(function(item) {
  return item * 2;
});
console.log(mapped);

// example
var items = ["1", "2", "3"];
var mapped = items.map(function(item) {
  return Number(item);
});
console.log(mapped);

// another example
var names = [" Aaron", "Young "];
var trimmed = names.map(x => x.trim());
console.log(trimmed);

// another example: convert array of first names, to person objects

var names = ["Aaron", "Kendra"];
var persons = names.map(function(name) {
  return {
    firstname: name
  }
});
console.log(persons);

// another example
var names = [
  {
    firstname: "Aaron",
    lastname: "Young"
  },
  {
    firstname: "Ruben",
    lastname: "Ulloa"
  }
]

var fullNames = names.map(x => x.firstname + " " + x.lastname);
console.log(fullNames);
