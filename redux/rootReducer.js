import {combineReducers} from 'redux';
import exampleReducer from './example/example.reducer';

// MERGE ALL REDUCER INTO ROOT REDUCER WITH COMBINE REDUCER MIDDLEWARE
const rootReducer = combineReducers({
    exampleReducer: exampleReducer
})


export default rootReducer;