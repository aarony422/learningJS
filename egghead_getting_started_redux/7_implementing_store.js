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

// Let's implement createStore ourselves

const createStore(reducer) => {
  let state;
  let listeners = [];

  const getState() => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }
  const subscribe(listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !=== listener);
    }
  }
  dispatch({});
  return { getState, dispatch, subscribe }
};

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
