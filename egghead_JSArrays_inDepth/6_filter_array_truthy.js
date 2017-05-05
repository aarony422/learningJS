// Array filter creates a NEW ARRAY, by iterating through the elements
// and adds that element to the new array if a provided function returns
// truthy

var items = [1,2,3,4,5];
var filtered = items.filter(x => x > 3);
console.log(filtered);

// Example: filter people with animals

var people = [
  {
    name: "aaron",
    pets: ['cat', 'dog']
  },
  {
    name: "Ruben",
    pets:['pig']
  },
  {
    name: "Kendra",
    pets:[]
  }
];

var filtered = people.filter(x => x.pets.length); // truthy values are > 0
console.log(filtered);

// What if some people don't have the pets property?
var people = [
  {
    name: "aaron",
    pets: ['cat', 'dog']
  },
  {
    name: "Ruben",
    pets:['pig']
  },
  {
    name: "Kendra"
  }
];

// we can do the following
var filtered = people.filter(x => x.pets); // truthy values are > 0
console.log(filtered);

// Larger example: filter out lessons with array tag, and at least 1000 views
var lessons = [
  {
    title: "JS 101",
    views: 1000,
    tags: ["array", "concat"]
  },
  {
    title: "CSS 102",
    views: 950,
    tags: ["array", "slice"]
  },
  {
    title: "JS 200",
    views: 1025,
    tags: ["functions", "bind"]
  }
];

var minViews = 1000;
var searchTerm = "array";

var filtered = lessons
    .filter(x => x.tags.indexOf(searchTerm) > -1)
    .filter(x => x.views >= minViews)
    .sort((a,b) => b.views - a.views)
    .map(x =>  `  <li>${x.title}</li>`)
    .join('\n');

console.log(`<ul>
  ${filtered}
  </ul>`);
