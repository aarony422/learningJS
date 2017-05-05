// Our classic reduce example

var data = [1,2,3,4];

function reducer(acc, val) {
  return acc + val;
}

var sum = data.reduce(reducer); // Oops! we forgot to give it an initial val!
console.log(sum); // But this still works! returns 10

// How did this happen?
// Turns out, if an initial value was not passed in, JS will assume the
// first item in the array is your initial value!
// In this case, they assumed data[0] = 1 was our initial value.
// This doesn't work with every case...
// What happens in this case?

var data2 = ["apple", "orange", "apple", "apple"];

function reducer2(acc, val) {
  if (acc[val]) { // Since acc is 'apple', this statement is never true!
    acc[val] += 1;
  } else {
    acc[val] = 1;
  }
  return acc; // so 'apple' is being returned every time
}

var tally = data2.reduce(reducer2);
console.log(tally); // apple

// Another error that could happen, is not returning anything in the reducer

function reducer3(acc, val) {
  var sum = acc + val;
}

var sum2 = data.reduce(reducer3, 0);
console.log(sum2); // undefined! or worse, it could throw an error

// In summary,
// Always pass in an initial value
// and return the acc
