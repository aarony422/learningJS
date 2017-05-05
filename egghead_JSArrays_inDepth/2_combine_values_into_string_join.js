// Array.prototype.join()
var names = ["Aaron", "Young"];

// we can just concat manually, but is not maintainable
// names can now be anything, dynamically generated!
// let's join them!

console.log(names.join(" "));
console.log(names.join()); // items will be comma separated, by default

// a practical use for this, is in a commandline program
// if you want to display a help text

var help = [
  'Usage',
  '     myapp <input>'
];

if (process.argv[2] === 'help') {
  console.log(help.join('\n'));
}

// We can also chain it will other array methods
var name = "aaron young";
// we can to uppercase the first letter of each word
var upperCasedName = name.split(" ") // ['aaron', 'young']
                         .map(x => x.charAt(0).toUpperCase() + x.slice(1)) // ["Aaron", "Young"]
                         .join(" "); // "Aaron Young"

console.log(upperCasedName);
