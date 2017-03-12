// top level reducer 
// reducer directory follows the same path that the data is kept in inside store

// combineReducers is function from redux package that allows us to combine multiple reducers into top level reducer that is then passed to store
import { combineReducers } from 'redux';

// import characters reducer. this will be a new combined reducer
import characters from './characters';

// import character reducer
import character from './character';

export default combineReducers({
  // bringing characters from characters reducer and exporting to combineReducer
  // data will be able to be put in root. need an action to create something
  characters,
  character,
});
