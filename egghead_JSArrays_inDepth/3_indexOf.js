// We can use indexOf to check if an element is in an array

var family = ["Aaron", "Ruben", "Kendra"];
console.log(family.indexOf("Ruben")); // 1
console.log(family.indexOf("Eric")); // -1

var ericExists = family.indexOf("Eric") > -1;

if (!ericExists) {
  family.push("Eric");
}

console.log(family);

// We can provide a START position for the search in indexOf
var family = ["Aaron", "Ruben", "Kendra", "Eric"];
console.log(family.indexOf("Ruben", 2)); // -1, since "Ruben" isn't after 2
console.log(family.indexOf("Ruben", 1)); // 1

// Notice, that even with a start position, the indexOf will return the index
// relative to the entire array!

// We can do this with an array of objects as well!

var aaron = { name: "aaron"};
var ruben = { name: "Ruben"};
var kendra = { name: "Kendra"};

var family = [aaron, ruben, kendra];
console.log(family.indexOf(ruben)); // 1

// using indexOf to create a filter
var whitelist = ['.css', '.js'];
var events = [
  {file: 'css/core.css'},
  {file: 'js/app.js'},
  {file: 'index.html'}
];

var filtered = events.filter(event => {
  var ext = require('path').extname(event.file); // parses the file ext
  return whitelist.indexOf(ext) > -1;
})

console.log(filtered);
