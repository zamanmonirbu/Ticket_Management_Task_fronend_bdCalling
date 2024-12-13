import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from 'redux-thunk';
import rootReducer from './redux';

function saveToLocalStorage(state) {
  try {
    const serializedStore = JSON.stringify(state);
    window.localStorage.setItem('store', serializedStore);
  } catch (e) {
    console.error('Error saving state:', e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedStore = window.localStorage.getItem('store');
    if (!serializedStore) return undefined;
    return JSON.parse(serializedStore);
  } catch (e) {
    console.error('Error loading state:', e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
