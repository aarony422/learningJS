// We know we can do the following with reduce

function reducer(accumulator, value) {
  return accumulator + value;
}

var data = [1,2,3,4,5,3,1];
var sum = data.reduce(reducer, 0);
console.log(sum); // 18

// What if we wanted to compute the mean?
// we could do:

console.log(sum / data.length);

// However, we didn't really "reduce" the array into the mean
// we reduced the array into the sum, and then computed the mean
// As good functional programmers, this isn't good enough!
// we can take advantage of optional args of reducer

function reducer2(accumulator, value, index, array) {
  var intermediaryValue = accumulator + value;

  // if we iterated the last item, we return the mean instead of the sum
  if (index === array.length - 1) {
    return intermediaryValue / array.length;
  }
  return accumulator + value;
}

var mean = data.reduce(reducer2, 0);
console.log(mean);
