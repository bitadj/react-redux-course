// create reducer that will react to `setCharacters` action
// all reducers will follow this format!!

import { SET_CHARACTERS } from './actions';
// Import statements

const initialState = [];
// initializes this particular reducer's state. good practice to set initial state variable that defines what the initial state of what this particular reducer is going to be.

// export reducer function 
// export a function that takes in the state, and the action
export default (state = initialState, action) => {

  // most reducers use a case statement. b/c you can have a lot of actions that a reducer is looking for.
  // listen on action type
  switch (action.type) {

    // match on that action type
    // any action that we want to do something on, we add it as a case statement
    case SET_CHARACTERS:
      return action.characters;
    // pulls characters out of action and return them (put them into our store)
    // return how we want state to be changed
    default:
      // otherwise we return whatever state was already there
      return state;
    // need to ensure that it's actually in our root state. to do this, go to reducer index.js file. import reducer that was just created and drop it into the export combineReducers()
  }
}

// all reducers will follow this format!!
