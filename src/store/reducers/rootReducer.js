import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// import reducers

import users from './users';
import updateProfile from './updateProfile';

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    updateProfile,
    users
});

export default rootReducer;
