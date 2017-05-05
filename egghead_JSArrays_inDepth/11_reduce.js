var items = [1,2,3,4,5];
var sum = items.reduce(reducer, 0);
function reducer(acc, val) {
  return acc + val;
}

console.log(sum);

// count number of images in albums
var albums = [
  {
    title: "born this way",
    images: ['1', '2', '3']
  },
  {
    title: "applause",
    images: ['1', '2']
  }
]

var totalImages = albums.reduce((acc, val) => acc + val.images.length, 0);
console.log(totalImages);
