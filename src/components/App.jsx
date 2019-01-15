
import React, { Component } from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router'
import SearchResults from './views/search-results/SearchResults';
import FormLab from './views/formlab/FormLab'
import FormLabUpdate from './views/formlab/FormLabUpdate';
import Board from './views/board/Board';
import BooksellerRequest from './views/request-bookseller/BibliothecaireRequest';
import ArticleProposal from './views/request-bookseller/ArticleProposal';
import Home from './views/home/Home';
import LibraryRequest from './views/request-library/LibraryRequest';
import Welcome from './views/Welcome/Welcome';
import About from './views/About/About';
import Connexion from './views/Connexion/Connexion';
import PartnerStudy from './views/PartnerStudy/PartnerStudy';

export default class App extends Component {
  render = () => (
    <Switch>
      <Route exact path="/" component={ Welcome }/>
      <Route path="/proposals" component={ ArticleProposal }/>
      <Route path="/articles" component={ SearchResults }/>
      <Route path="/profilUpdate" component={ FormLabUpdate }/>
      <Route path="/board" component={ Board }/>
      <Route path="/booksellerRequest" component={ BooksellerRequest }/>
      <Route path="/formLab" component={ FormLab }/>
      <Route path="/libraryRequest" component={ LibraryRequest}/>
      <Route path="/welcome" component={ Welcome }/>
      <Route path="/About" component={ About }/>
      <Route path="/Connexion" component={ Connexion}/>
      <Route path="/PartnerStudy" component= {PartnerStudy}/>
      <Route render={ () => <h1>404 Error</h1> } />
    </Switch>
  );
}