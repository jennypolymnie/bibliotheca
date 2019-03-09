import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import users from './users';
import researchThemes from './researchThemes';

export default (history) => combineReducers({ users, researchThemes, router: connectRouter(history) });
