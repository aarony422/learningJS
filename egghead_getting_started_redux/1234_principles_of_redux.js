// Represent state as a single JS object
// All mutations are explicit: to keep track of them

// State tree is read-only
// when you want to change the state, you need to dispatch an Action
// An Action is a JS object that minimally describes the change
// Action is required to have a "type" property using a string (serializable)

// Pure functions: return value depends solely on it's inputs
// Pure functions are predictable, does not change inputs

// UI is most predictable when it is a pure function of the app state
// state mutations need to be described as a pure function
// takes in previous state, and the action being dispatched, returns the next state
// This function is called the reducer
