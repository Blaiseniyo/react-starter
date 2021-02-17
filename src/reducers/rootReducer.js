import authReducer from './authReducer';
import postsReducer from './postsReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth:authReducer,
    posts:postsReducer
})

export default rootReducer;