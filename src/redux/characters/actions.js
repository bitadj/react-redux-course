// populate store with initial data
import { API_URL } from '../../constants';

// export constant will be used by reducer to ensure that it reacts to the correct action
export const SET_CHARACTERS = 'SET_CHARACTERS';

// export an action to do something and sent to store
// returns a function
// if return a funciton from an action, redux middleware will ensure that the dispatch function is passed into this function that is returned here. Allows us to do asyncrinious work and delay the dispatching of an actual action that application will respond to until a network request comes back, or similar
export function getCharacters() {
  return dispatch =>
    fetch(`${API_URL}/people`)
      // fetch data from API
      .then(res => res.json())
      // pull results from JSON.
      .then(res => res.results)
      // take all characters from results, and then dispatch another action
      .then(characters =>
        // dispatching setCharacters action. Pass it characters that just received from API
        dispatch(setCharacters(characters))
      );
}

// action to setCharacters. takes in characters retrieved from API
// returns an actual action object
export function setCharacters(characters) {
  return {
    // give it a type. 
    // Type is always going to be what the reducers are looking for. 
    // Reducers will always be looking for a specific action type
    // constant?
    type: SET_CHARACTERS,
    // passing in characters from results (same as characters: characters)
    characters,
  };
}
