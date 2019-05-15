import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// import reducers

import users from './users';
import updateProfile from './updateProfile';
import reachOutDropdown from './reachOutDropdown';
import userRequestReducer from './userRequestReducer';
import selectedArticleReducer from './selectedArticleReducer';

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    profile: updateProfile,
    reachOutDropdown,
    users,
    userRequest: userRequestReducer,
    selectedArticle: selectedArticleReducer
});

export default rootReducer;
