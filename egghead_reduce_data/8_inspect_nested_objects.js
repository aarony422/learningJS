// suppose we have some complex objects
var aaron = {
  name: "Aaron Young",
  student: true,
  parent: {
    father: {
      student: false
    },
    mother: {
      student: false
    }
  }
}

var ruben = {
  name: "Ruben Ulloa",
  student: true,
  parent: {
    father: {
      student: false
    },
    mother: {
      student: false
    }
  }
}

// but kendra is missing her father
var kendra = {
  name: "Kendra Lien",
  student: false,
  parent: {
    mother: {
      student: true
    }
  }
}

// If we try to create some pipeline, we might run into a problem with kendra!
var people = [aaron, ruben, kendra];
// we get an error
people.forEach(function(person) {
  //console.log(person.name + "'s father was a student:", person.name.father.student);
})

// This happens all the time in programming
// We can do null checks
// but is there a better way to handle this? YES!

function fatherWasStudent(person) {
  var path = "parents.father.student";
  // we split the path into an array of strings ["parents", "father", "student"]
  return path.split(".").reduce(function(obj, field) {
    if (obj) {
      return obj[field];
    }
    return false; // some default value if something is undefined
  }, person);
}

people.forEach(function(person) {
  console.log(person.name + "'s father was a student:", fatherWasStudent(person));
})

// This is a good trick to handle misformatted data
// But don't forget, to fully understand why it's misformatted first, becore
// trying to patch it up like this!
