// every() returns true if all elements in the array passes a condition

var items = [1,2,3,4,5];
var result = items.every(x => x < 10);
console.log(result);

// Every will exit on the first failure

// another example
var items = ["1", "2", 3, "4"];
var result = items.every(x => typeof x === 'string');
console.log(result);

// another example
var fields = [
  {
    field: 'email',
    value: 'aarony@gmail.com',
    errors: []
  },
  {
    field: 'username',
    value: '',
    errors: ['no username provided']
  }
];

var isValid = fields.every(x => x.errors.length === 0);
console.log(isValid);

// the logic inside every() is exactly like what you would pass in filter
// We can reuse this logic by putting that in another function

function validate(x) {
  return x.errors.length === 0;
}

var isValid = fields.every(validate);
var validatedFields = fields.filter(validate);

console.log(isValid);
console.log(validatedFields);
