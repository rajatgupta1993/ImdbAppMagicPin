import HomeReducer from './homeReducer';
import SearchReducer from './searchReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    HomeReducer,
    SearchReducer
})