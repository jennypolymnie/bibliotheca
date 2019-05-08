import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// import reducers

import users from './users';
import updateProfile from './updateProfile';
import reachOutDropdown from './reachOutDropdown';
import userRequestReducer from './userRequestReducer';

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    profile: updateProfile,
    reachOutDropdown,
    users,
    userRequest: userRequestReducer
});

export default rootReducer;
