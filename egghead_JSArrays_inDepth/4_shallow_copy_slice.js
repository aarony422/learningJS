// slice() creates a shallow copy of an array
var items = [1,2,3,4];
var copy = items.slice();
console.log(copy); // [1,2,3,4]

copy.push(6);
copy[0] = 100;
console.log(items); // unchanged
console.log(copy); // only the copy has the new item

// What is a shallow copy?
// slice copies the values in the original
// if the original contain object references, the references will be copied

var person = { name: "aaron"};
var items = [1,2,3, person];
var copy = items.slice();
copy[3].name = "Ruben";

// both changed! since the object reference is copied
console.log(items);
console.log(copy);

// We can also take a subsection of an array with slice
// exclusive of the end index
var items = [1,2,3,4,5];
var copy = items.slice(0,2);
console.log(copy);

// if you provide only the start, you'll get everything after the start
var items = [1,2,3,4,5,6,7,8,9];
var copy = items.slice(2);
console.log(copy);

// using negative numbers
var items = [1,2,3,4,5];
var copy = items.slice(-1); // starts from the back, and begin the slice
console.log(copy);

var copy = items.slice(-3); // [3,4,5]
console.log(copy);

// we can have negative end index
var copy = items.slice(1, -1); // [2,3,4]
console.log(copy);
