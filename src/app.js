// entry point of app
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // for hot module reloading

// setting up redux
// createStore creates store, applyMiddleware, compose helps compose middleware together into one middleware function
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Provider component gives redux store to entire application
import { Provider } from 'react-redux';
import App from './components/App';

// top level reducer
import reducer from './redux';

// bring in action we created. need to use getCharacters action
import { getCharacters } from './redux/characters/actions';

require('./index.html');

// see what is happening in redux dev tools in chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// CREATE THE STORE. pass the reducer. pass anything we use to change the store. compose those together into one function with compose function.
const store = createStore(reducer, composeEnhancers(
  // applies the middlware thunk
  applyMiddleware(thunk),
));

// Kick off things by getting all characters
// calling getCharacters action imported from characters
// create an action, in this case kick off ajax request from actions.js and later send characters in an action to the store
store.dispatch(getCharacters());

// Create app. This is a reference to our container
const container = document.querySelector('#app-container');

// Render app on the screen. This is being rendered by react-dom
ReactDOM.render(
  // wrap application in provider component in order to give store to entire application
  // <Provider /> has prop called store which provides global store to entire application
  // AppContainer only here for hot-module reloading
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>
  , container
);

// Hot module reloading boilerplate. checks if module is hot, it will accept hot-module reloading on app component and render the react stuff 
if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>
      , container
    );
  });
}
