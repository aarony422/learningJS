var expect = require('expect')
var Redux = require('redux')

const counter = (state = 0, action) => {
  // if the reducer receives 'undefined' as the state, it must return what it
  // considers the 'initial' state to be

  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const createStore = Redux.createStore;
const store = createStore(counter);

// 3 important methods
// getState(), dispatch(), and subscribe()
console.log(store.getState());
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState());
// pass in a callback that gets called whenever an action has been dispatched
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: 'INCREMENT' });
