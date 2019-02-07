
import React, { Component } from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router'
import { Grid, Menu, Icon } from 'semantic-ui-react'
import SearchResults from './views/search-results/SearchResults';
import FormLab from './views/formlab/FormLab'
import FormLabUpdate from './views/formlab/FormLabUpdate';
import Board from './views/board/Board';
import BooksellerRequest from './views/BooksellerRequest/BooksellerRequest';
import ArticleProposal from './views/BooksellerRequest/ArticleProposal';
import LibraryRequest from './views/LibraryRequest/LibraryRequest';
import Welcome from './views/Welcome/Welcome';
import About from './views/About/About';
import PartnerStudy from './views/PartnerStudy/PartnerStudy';
import PartnerListLab from './views/PartnerStudy/PartnerListLab/PartnerListLab';
import RequestEquipment from './views/RequestEquipment/RequestEquipment';
import ReviewForm from './views/Review/ReviewForm';
import Home from './views/home/Home';
import Login from './views/Welcome/Login';
import CenterGrid from './views/Welcome/CenterGrid';
import RequestSend from './views/BooksellerRequest/RequestSend';
import ProposalSend from './views/BooksellerRequest/ProposalSend';
import ProfilType from './views/ProfilType/ProfilType';
import SearchPage from './views/Review/SearchPage';
import './App.css';
export default class App extends Component {
  render = () => (
    <Grid padded className="full-height">      
            <Grid.Row>
                <Grid.Column width={1} textAlign={'center'} color='blue' className="paddless-column">
                 <div className='vertical-center'>
                  <Menu fluid icon vertical secondary tabular='left'>
                    <Menu.Menu position="right">
                      <Menu.Item name='1' active={true} position='right'>
                          <Icon fitted name='search' color='yellow'/> 
                        </Menu.Item>
                        <Menu.Item name='2' active={false} position='right'>
                          <Icon fitted name='cloud upload' color='yellow'/> 
                        </Menu.Item>
                        <Menu.Item name='3' active={false} position='right'>
                          <Icon fitted name='star half' color='yellow'/> 
                        </Menu.Item>
                        <Menu.Item name='4' active={false} position='right'>
                          <Icon fitted name='question circle outline' color='yellow'/> 
                        </Menu.Item>
                      </Menu.Menu>
                  </Menu>
                  </div>
                </Grid.Column >
                <Grid.Column verticalAlign={"middle"} width={14}>
                <Switch>
                  <Route exact path="/" component={ CenterGrid }/>
                  <Route path="/proposals" component={ ArticleProposal }/>
                  <Route path="/articles" component={ SearchResults }/>
                  <Route path="/profilUpdate" component={ FormLabUpdate }/>
                  <Route path="/board" component={ Board }/>
                  <Route path="/booksellerRequest" component={ BooksellerRequest }/>
                  <Route path="/formLab" component={ FormLab }/>
                  <Route path="/libraryRequest" component={ LibraryRequest}/>
                  <Route path="/welcome" component={ Welcome }/>
                  <Route path="/About" component={ About }/>
                  <Route path="/PartnerStudy" component= {PartnerStudy}/>
                  <Route path="/List" component= {PartnerListLab}/>
                  <Route path="/requestEquipment" component={RequestEquipment}/>
                  <Route path="/review" component={ReviewForm}/>
                  <Route path="/requestSend" component={RequestSend}/>
                  <Route path="/proposalSend" component={ProposalSend}/>
                  <Route path="/profilType" component={ProfilType}/>
                  <Route path="/search" component={SearchPage}/>
                  <Route render={ () => <h1>404 Error</h1> } />
                </Switch>
                </Grid.Column>
                <Grid.Column width={1} textAlign={'center'} color='blue' className="paddless-column">
                <div className='vertical-center float-container'>
                  <Menu compact icon vertical secondary tabular='right' floated='left'>
                      <Menu.Item name='4' active={false} position='left'>
                        <Icon fitted name='search' color='yellow'/> 
                      </Menu.Item>
                      <Menu.Item name='6' active={false} position='left'>
                        <Icon fitted name='search' color='yellow'/> 
                      </Menu.Item>
                      <Menu.Item name='7' active={false} position='left'>
                        <Icon fitted name='search' color='yellow'/> 
                      </Menu.Item>
                  </Menu>
                  </div>
                </Grid.Column>
            </Grid.Row>  
        </Grid>
  );
}