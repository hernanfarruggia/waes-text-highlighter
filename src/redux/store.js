// Libraries
import { createStore, combineReducers } from 'redux';

// Reducers
import filter from '../components-app/filter/filter-reducer';
import form from '../components-app/form/form-reducer';
import highlighter from '../components-app/highlighter/highlighter-reducer';


const reducer = combineReducers({
    filter,
    form,
    highlighter
});

const store = createStore(reducer);

export default store;