// Libraries
import { createStore, combineReducers } from 'redux';

// Reducers
import filter from './reducers/filter';
import form from './reducers/form';
import highlighter from './reducers/highlighter';


const reducer = combineReducers({
    filter,
    form,
    highlighter
});

const store = createStore(reducer);

export default store;