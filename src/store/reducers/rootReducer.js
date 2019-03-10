import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// import reducers

import users from './users';
import researchThemes from './researchThemes';

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    users
});

export default rootReducer;
