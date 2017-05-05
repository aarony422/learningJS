// Array.prototype.concat();
// method on an existing array, returns a new array, with original + params

var items = [1,2];
// Takes copy of old array, and add any parameters, and returns it as new array
var newItems = items.concat(3);
console.log(newItems);

// You can provide as many parameters as you like
var newItems = items.concat(3,4,5);
console.log(newItems);

// Not limited by type either!
var newItems = items.concat("Hello", undefined);
console.log(newItems);

// it can also take in other arrays
var newItems = items.concat([3,4], [5,6,7]);
console.log(newItems); // [ 1, 2, 3, 4, 5, 6, 7 ] Get a flat array
// concat pulls out the elements in arrays, and concat them

// But if we had nested array, it only flattens 1 level deep
var newItems = items.concat([3,4], [5,[6,7]]);
console.log(newItems); // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]

// Let's say we have a list of objects
var people = [
  {
    name: "aaron"
  },
  {
    name: "Ruben"
  }
];

var people2 = [
  {
    name: "Kendra"
  },
  {
    name: "Eric"
  }
];

people.forEach(function(person) {
  console.log(person.name);
})

// What if we wanted to print people1 and people2?
// We can just have 2 forEach statements... OR just concat people1 and people2

people.concat(people2).forEach(function(person) {
  console.log(person.name);
})
