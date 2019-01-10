
import React, { Component } from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router'
import SearchResults from './views/search-results/SearchResults';
import Home from './views/home/Home'
export default class App extends Component {
  render = () => (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route path="/articles" component={ SearchResults }/>
      <Route render={ () => <h1>404 Error</h1> } />
    </Switch>
  );
}