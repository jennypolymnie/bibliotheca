import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './users';
import researchThemes from './researchThemes';

const rootReducer = combineReducers({ users, researchThemes, routing: routerReducer });

export default rootReducer;
