import React from 'react';
import { Route } from 'react-router';
import SearchResults from './components/views/search-results/SearchResults';
import App from './components/App'
export default (
  <Route path='/' component={App}>
    <Route exact component={SearchResults} />
    <Route path='articles' component={SearchResults} />
    <Route path='*' component={SearchResults} />
  </Route>
);