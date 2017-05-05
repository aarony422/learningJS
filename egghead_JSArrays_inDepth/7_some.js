// some takes in a function, and iterates through each element of the array,
// calling that function each time. If at any time, the function returns true,
// some() will return true.

var items = [1,2,3,4,5];
var hasThree = items.some(x => x === 3);
console.log(hasThree);

var hasThree = items.some(x => x === 6);
console.log(hasThree);

// Use some as a quick and dirty way to get a yes or no answer about an array
// We can use some as part of the ternary operator

list.classList.add(
  tasks.some(x => x.completed === false)
    ? 'task-uncompleted'
    : 'task-completed';
)

// We can also use it to check for duplicates
