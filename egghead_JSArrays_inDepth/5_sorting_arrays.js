// Array.prototype.sort() sorts in-place

var names = ["ruben", "aaron", "kendra"];
names.sort();
console.log(names);

// When sorting an array of numbers, each number is converted into a string
// And then sorted by their unicode

var nums = [10, 30, 2, 20];
nums.sort();
console.log(nums); // Not what you'd expect!

// To perform a numeric sort, we need to provide a comparator

var nums = [10, 30, 2, 20];
nums.sort((a,b) => a - b); // you defined how values are compared to each other
console.log(nums);

// comparators returns 3 values; 0, > 0, or < 0
// 0: a=b , > 0: a > b, and < 0: a < b
// to get a descending sort, we simply use (a,b) => b-a as the comparator

// A more complex example:

var lessons = [
  {
    title: "JS 101",
    views: 1000
  },
  {
    title: "CSS 102",
    views: 1050
  },
  {
    title: "JS 200",
    views: 1025
  }
]

// We want to sort the objects by views

var list = lessons
  .sort((a,b) => b.views - a.views)
  .map(x=> `  <li>${x.title} (${x.views})</li>`)
  .join('\n');

var output = `<ul>\n${list}\n</ul>`;
console.log(output);
