import React from 'react';
import { Route } from 'react-router';
import SearchResults from './components/views/search-results/SearchResults';
import App from './components/App'
export default (
  <Switch>
    <Route path='/' component={SearchResults} />
    <Route path='/articles' component={SearchResults} />
    <Route path='/*' component={SearchResults} />
  </Switch>
);