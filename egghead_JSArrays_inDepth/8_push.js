var pets = ["cat", "dog"];
pets.push("turtle");
console.log(pets);

// we can pass multiple items
var pets = ["cat", "dog"];
pets.push("turtle", "fish");
console.log(pets);

// we can merge 2 lists
var pets = ["cat", "dog"];
var wishlist = ["turtle", "fish"];
pets.push.apply(pets, wishlist);
console.log(pets);
