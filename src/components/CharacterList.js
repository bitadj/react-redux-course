// THIS IS HOW WE CONNECT A COMPONENT TO THE REDUX STORE

import React from 'react';
import { connect } from 'react-redux';
// allows us to connect our component to the redux store
// anytime state is updated, it will notify the component and the component will update accordingly
// if we connect component to store, need `connect` component to do so

import {
  setCurrentCharacter,
  getCharacterProfile,
} from '../redux/character/actions';

const CharacterList = ({ characters, setCharacter }) =>
  // need to wrap CharacterList in connected component
  // creates new compnent that talks to store and makes sure correct things are passed to compnent through props
  // connect is curried function. needs to be called twice
  <div id='character-list' className='col-md-6'>
    <h1>Characters</h1>
    <ul>
      {characters.map((c, i) =>
        <li
          onClick={setCharacter(i + 1)}
          key={c.name}
        >
          {/*coming from mapDispatchToProps*/}

          {c.name}
        </li>
      )}
    </ul>
  </div>;

// mapStateToProps receives state from the store, and returns things we want passed to component through props
// using es6 object destructuring 
// const mapStateToProps = ( <<store state object>> ) 
// becomes next line because we are destructuring and grabbing just characters from the store/state
// receives an object and returns an object
const mapStateToProps = ({ characters }) => ({
  characters,
  // characters are pulled from state and passed directly to character list as an object.
  // in order to do this, we need to pass mapStateToProps as the first parameter in the connect function
});

// passed dispach and returns and object
const mapDispatchToProps = dispatch => ({
  // objects can have functions set on them
  setCharacter(id) {
    // action returns a function
    // want id to still exist when map runs (closure!)
    return () => {
      // action creater `setCurrentCharacter` creates action from character/action.js
      dispatch(setCurrentCharacter(id));
      dispatch(getCharacterProfile(id));
    };
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
// because we know props are what is passed to a functional component (i.e. CharacterList), we can pull those characters directly out of props and use them in CharacterList
