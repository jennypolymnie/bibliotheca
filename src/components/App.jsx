
import React, { Component } from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router';
import { Grid, Menu, Image } from 'semantic-ui-react';
import SearchResults from './views/search-results/SearchResults';
import FormLab from './views/formlab/FormLab';
import FormLabUpdate from './views/formlab/FormLabUpdate';
import Board from './views/board/Board';
import BooksellerRequest from './views/BooksellerRequest/BooksellerRequest';
import ArticleProposal from './views/BooksellerRequest/ArticleProposal';
import LibraryRequest from './views/LibraryRequest/LibraryRequest';
import About from './views/About/About';
import PartnerStudy from './views/PartnerStudy/PartnerStudy';
import PartnerListLab from './views/PartnerStudy/PartnerListLab/PartnerListLab';
import RequestEquipment from './views/RequestEquipment/RequestEquipment';
import ReviewForm from './views/Review/ReviewForm';
import { LogoWithCenterGrid, LoginWithCenterGrid } from './views/Welcome/CenterGrid';
import RequestSend from './views/BooksellerRequest/RequestSend';
import ProposalSend from './views/BooksellerRequest/ProposalSend';
import ProfilType from './views/ProfilType/ProfilType';
import SearchPage from './views/Review/SearchPage';
import AnalyticalPart from './views/formlab/AnalyticPart';
import { AvailableActiveItem } from './views/Welcome/ActiveIcon';
import './App.css';
// import { createRequireFromPath } from 'module';

const buttonSize = 'large';
export default class App extends Component {
  render = () => (
      <Grid padded className="full-height">
          <Grid.Row>
              <Grid.Column width={1} textAlign="center" color="blue" className="paddless-column">
                  <div>
                      <Menu vertical secondary className="fixed-top menu-buttons-left">
                          <div className="miniLogo">
                              <Image src={require('../resources/bibliotheca_white.svg')} />
                          </div>
                      </Menu>
                  </div>

                  <div className="vertical-center">
                      <Menu icon compact vertical secondary floated="right" className="fixed-center menu-buttons-left">

                          <AvailableActiveItem to="/libraryRequest" fitted name="request" iconName="search" color="yellow" size={buttonSize} />
                          <AvailableActiveItem to="/search" fitted name="search" iconName="cloud upload" color="yellow" size={buttonSize} />
                          <AvailableActiveItem to="/proposals" fitted name="proposal" iconName="star half" color="yellow" size={buttonSize} />
                          <AvailableActiveItem to="/booksellerRequest" fitted name="question" iconName="question circle outline" color="yellow" size={buttonSize} />

                      </Menu>
                  </div>
              </Grid.Column>
              <Grid.Column verticalAlign="middle" width={14}>
                  <Switch>
                      <Route exact path="/" component={LoginWithCenterGrid} />
                      <Route exact path="/logo">
                          <LogoWithCenterGrid src={require('../resources/bibliotheca_blue.svg')} size="massive" />
                      </Route>
                      <Route path="/proposals" component={ArticleProposal} />
                      <Route path="/articles" component={SearchResults} />
                      <Route path="/profilUpdate" component={FormLabUpdate} />
                      <Route path="/board" component={Board} />
                      <Route path="/reviewForm" component={ReviewForm} />
                      <Route path="/booksellerRequest" component={BooksellerRequest} />
                      <Route path="/formLab" component={FormLab} />
                      <Route path="/analyticalPart" component={AnalyticalPart} />
                      <Route path="/libraryRequest" component={LibraryRequest} />
                      <Route path="/About" component={About} />
                      <Route path="/PartnerStudy" component={PartnerStudy} />
                      <Route path="/List" component={PartnerListLab} />
                      <Route path="/requestEquipment" component={RequestEquipment} />
                      <Route path="/review" component={ReviewForm} />
                      <Route path="/requestSend" component={RequestSend} />
                      <Route path="/proposalSend" component={ProposalSend} />
                      <Route path="/profilType" component={ProfilType} />
                      <Route path="/search" component={SearchPage} />
                      <Route render={() => <h1>404 Error</h1>} />
                  </Switch>
              </Grid.Column>


              <Grid.Column width={1} textAlign="center" color="blue" className="paddless-column">

                  <div>
                      <Menu vertical secondary className="fixed-top menu-buttons-right">
                          <div className="miniLogo">
                              <Image src={require('../resources/bibliotheca_white.svg')} />
                          </div>
                      </Menu>
                  </div>


                  <div className="vertical-center">
                      <Menu icon vertical secondary floated="left" className="fixed-center menu-buttons-right">

                          <AvailableActiveItem to="/libraryRequest" fitted name="" iconName="discussions" color="yellow" size={buttonSize} />
                          <AvailableActiveItem to="/PartnerStudy" fitted name="partner" iconName="slideshare" color="yellow" size={buttonSize} />
                          <AvailableActiveItem to="/requestEquipment" fitted name="equipment" iconName="universal access" color="yellow" size={buttonSize} />
                      </Menu>
                  </div>
              </Grid.Column>
          </Grid.Row>
      </Grid>
  );
}
