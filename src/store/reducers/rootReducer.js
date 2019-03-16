import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// import reducers

import users from './users';
import updateProfile from './updateProfile';
import reachOutDropdown from './reachOutDropdown';

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    updateProfile,
    reachOutDropdown,
    users
});

export default rootReducer;
