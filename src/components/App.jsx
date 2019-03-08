
import React from 'react';
import { Route, Switch, browserHistory } from 'react-router';
// import { Provider } from 'react-redux';
// import store, { history } from '../store';
import { Grid, Menu } from 'semantic-ui-react';
import SearchResults from './views/search-results/SearchResults';
import FormLab from './views/LabForm/FormLab';
import FormLabUpdate from './views/LabForm/FormLabUpdate';
import BooksellerRequest from './views/LibrarianRequest/BooksellerRequest';
import ArticleProposal from './views/LibrarianRequest/ArticleProposal';
import LibraryRequest from './views/LibraryRequest/LibraryRequest';
import PartnerStudy2 from './views/PartnerStudy/PartnerStudy2';
import PartnerListLab from './views/PartnerStudy/PartnerListLab/PartnerListLab';
import RequestEquipment from './views/ReachOut/RequestEquipment';
import ReviewForm from './views/Review/ReviewForm';
import { LogoWithCenterGrid, LoginWithCenterGrid } from './views/Home/CenterGrid';
import RequestSend from './views/LibrarianRequest/RequestSend';
import ProposalSend from './views/LibrarianRequest/ProposalSend';
import Profile from './views/Profile/Profile';
import SearchPage from './views/Review/SearchPage';
import AnalyticalPart from './views/LabForm/AnalyticPart';
import { AvailableActiveItem } from './views/Home/ActiveIcon';
import ForumPage from './views/forum/Forum';
import './App.css';
import logoYellow from '../resources/bibliotheca_yellow.svg';
import logoBlue from '../resources/bibliotheca_blue.svg';
import EquipmentPart from './views/LabForm/EquipmentPart';
// import { createRequireFromPath } from 'module';

const buttonSize = 'large';

const App = () => (
    <Grid padded className="full-height">
        <Grid.Row>
            <Grid.Column width={1} color="blue" className="paddless-column">
                <Menu icon compact secondary className="fixed-top menu-buttons-left">
                    <AvailableActiveItem to="/logo" src={logoYellow} name="request" color="yellow" size={buttonSize} />
                </Menu>

                <div className="vertical-center">
                    <Menu icon compact vertical secondary floated="right" className="fixed-center menu-buttons-left">
                        <AvailableActiveItem to="/libraryRequest" fitted name="request" iconName="search" color="yellow" size={buttonSize} />
                        <AvailableActiveItem to="/proposals" fitted name="proposal" iconName="cloud upload" color="yellow" size={buttonSize} />
                        <AvailableActiveItem to="/search" fitted name="search" iconName="star half" color="yellow" size={buttonSize} />
                        <AvailableActiveItem to="/booksellerRequest" fitted name="question" iconName="question circle outline" color="yellow" size={buttonSize} />

                    </Menu>
                </div>
            </Grid.Column>
            <Grid.Column width={14}>
                <Switch>
                    {/* <Provider store={store}> */}
                    {/* <Router history={history}> */}
                    <Route exact path="/" component={LoginWithCenterGrid} />
                    <Route exact path="/logo">
                        <LogoWithCenterGrid src={logoBlue} size="massive" />
                    </Route>
                    <Route path="/proposals" component={ArticleProposal} />
                    <Route path="/articles" component={SearchResults} />
                    <Route path="/profilUpdate" component={FormLabUpdate} />
                    <Route path="/reviewForm" component={ReviewForm} />
                    <Route path="/booksellerRequest" component={BooksellerRequest} />
                    <Route path="/formLab" component={FormLab} />
                    <Route path="/analyticalPart" component={AnalyticalPart} />
                    <Route path="/equipmentPart" component={EquipmentPart} />
                    <Route path="/libraryRequest" component={LibraryRequest} />
                    <Route path="/PartnerStudy" component={PartnerStudy2} />
                    <Route path="/List" component={PartnerListLab} />
                    <Route path="/requestEquipment" component={RequestEquipment} />
                    <Route path="/review" component={ReviewForm} />
                    <Route path="/requestSend" component={RequestSend} />
                    <Route path="/proposalSend" component={ProposalSend} />
                    <Route path="/profilType" component={Profile} />
                    <Route path="/search" component={SearchPage} />
                    <Route path="/forum" component={ForumPage} />
                    <Route render={() => <h1>404 Error</h1>} />
                    {/* </Provider> */}
                    {/* </Router> */}
                </Switch>
            </Grid.Column>


            <Grid.Column width={1} textAlign="center" color="blue" className="paddless-column">

                <Menu icon floated="center" secondary className="fixed-top menu-buttons-right">
                    <AvailableActiveItem to="/profilUpdate" fitted name="user profile" iconName="user circle" color="yellow" size={buttonSize} />
                </Menu>

                <div className="vertical-center">
                    <Menu icon vertical secondary floated="left" className="fixed-center menu-buttons-right">
                        <AvailableActiveItem to="/forum" fitted name="" iconName="discussions" color="yellow" size={buttonSize} />
                        <AvailableActiveItem to="/PartnerStudy" fitted name="partner" iconName="users" color="yellow" size={buttonSize} />
                        <AvailableActiveItem to="/requestEquipment" fitted name="equipment" iconName="universal access" color="yellow" size={buttonSize} />
                    </Menu>
                </div>
            </Grid.Column>
        </Grid.Row>
    </Grid>

    // {React.cloneElement(this.props.children, this.props)}
);

export default App;
