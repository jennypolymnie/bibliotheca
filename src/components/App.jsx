
import React, { Component } from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router'
import SearchResults from './views/search-results/SearchResults';
import FormLab from './views/formlab/FormLab'
import FormLabUpdate from './views/formlab/FormLabUpdate';
import Board from './views/board/Board';
import BooksellerRequest from './views/request-bookseller/BibliothecaireRequest';
import ArticleProposal from './views/request-bookseller/ArticleProposal';
import Home from './views/home/Home'


export default class App extends Component {
  render = () => (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route path="/proposals" component={ ArticleProposal }/>
      <Route path="/articles" component={ SearchResults }/>
      <Route path="/profilUpdate" component={ FormLabUpdate }/>
      <Route path="/board" component={ Board }/>
      <Route path="/booksellerRequest" component={ BooksellerRequest }/>
      <Route path="/formLab" component={ FormLab }/>
      <Route render={ () => <h1>404 Error</h1> } />
    </Switch>
  );
}