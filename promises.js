// https://www.youtube.com/watch?v=s6SH72uAn3Q&t=62s

// Simple example of promise
// promise takes a callback
// resolve: fulfilling a promise
// reject: promise is not fulfilled
let promiseToCleanRoom = new Promise((resolve, reject) => {
  // Do some time consuming computation
  // cleaning the room
  let isClean = false;

  if (isClean) {
    resolve("clean");
  } else {
    reject("not clean");
  }
});

// execute a promise
// then is called when promise is resolved
// resolve can take in arguments
promiseToCleanRoom
  .then((fromResolve) => {
    console.log("The room is " + fromResolve)
  })
  .catch((fromReject) => {
    console.log("The room is " + fromReject)
})


// dependency/composable promises Example
// Let's say you need to clean room, then remove garbage, and then you'll get icecream
let cleanRoom = () => {
  return new Promise((resolve, reject) => {
    resolve("Cleaned Room")
  })
}

let removeGarbage = (message) => {
  return new Promise((resolve, reject) => {
    resolve(message + " remove Garbage")
  })
}

let getIcecream = (message) => {
  return new Promise((resolve, reject) => {
    resolve(message + " Got icecream!")
  })
}

cleanRoom()
  .then((result) => {
    return removeGarbage(result);
  })
  .then((result) => {
    return getIcecream(result);
  })
  .then((result) => {
    console.log("Finished " + result)
  })

// Let's say you want these 3 promises to run in parallel
Promise.all([cleanRoom(), removeGarbage(), getIcecream()])
  .then(() => {
    console.log("All Finished!")
  })


// Let's say you only need 1 of 3 promises to run in parallel
Promise.race([cleanRoom(), removeGarbage(), getIcecream()])
  .then(() => {
    console.log("One of them Finished!")
  })
