// Use reduce to filter and map over large datasets
// common uses of reduce, so common, they are known by other names
var data = [1,2,3];

// want to transform data into another array of the same size
// double each element

var doubled = data.reduce(function(acc, value) {
  acc.push(value * 2);
  return acc;
}, []);

console.log("doubled data: ", doubled);

// This more common done with map
var doubledMapped = data.map(function(item) {
  return item * 2;
})

console.log("doubledMapped data", doubledMapped);

// another common use of reduce, is to take an array, and return a subset
var data2 = [1,2,3,4,5,6];
var evens = data2.reduce(function(acc, value) {
  if (value % 2 === 0) {
    acc.push(value);
  }
  return acc;
}, []);

console.log("evens:", evens);

// this is more commonly done with filter

var evenFiltered = data2.filter(function(item) {
  return item % 2 === 0;
});

console.log("evenFiltered: ", evenFiltered);

// Why would we use reduce if we can use map and filter?
// we can compose filter and mapped

var evenDoubled = data2.filter(function(item){
  return item % 2 === 0;
}).map(function(item){
  return item*2;
});

console.log("evenDoubled Composed: ", evenDoubled);

// But, what you REALLY did was, we reduced the array into a subset of evens
// then, reduced it to another array of the same size, with elements doubled

// But, what if we had a big array?
var bigData = [];
for (var i = 0; i < 1000000; i++) {
  bigData.push(i);
}

console.time("bigData"); // time runtime, instead of logging 1000000 array items

var evenDoubledBig = bigData.filter(function(item){
  return item % 2 === 0;
}).map(function(item){
  return item*2;
});

console.timeEnd("bigData"); // ~ 132.983 ms

// What if we used reduce to do the same operation?

console.time("reducedBigData");

var reducedBigData = bigData.reduce(function(acc, value) {
  if (value % 2 === 0) {
    acc.push(value * 2);
  }
  return acc;
}, []);

console.timeEnd("reducedBigData"); // ~ 36.410 ms!! Much faster!

// So while map and filter is great, you should use reduce to do complex changes
// This way, you're not iterating through your big dataset multiple times
