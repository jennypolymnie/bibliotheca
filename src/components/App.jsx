
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { Grid, Menu } from 'semantic-ui-react';
import SearchResults from './Views/Search/SubComponents/SearchResults';
import FormLab from './Views/Profile/Profile';
import FormLabUpdate from './Views/Profile/SubComponents/FormLabUpdate';
import Ask from './Views/Ask/Ask';
import Propose from './Views/Propose/Propose';
import Search from './Views/Search/Search';
import Partner from './Views/Partner/Partner';
import PartnerListLab from './Views/Partner/SubComponent/PartnerListLab/PartnerListLab';
import ReachOutListLab from './Views/Help/ReachOutListLab/ReachOutListLab';
import Help from './Views/Help/Help';
import ReviewForm from './Views/Review/SubComponent/ReviewForm';
import { LogoWithCenterGrid, LoginWithCenterGrid } from './Views/Home/Home';
import RequestSend from './Views/Ask/SubComponents/RequestSend';
import ProposalSend from './Views/Propose/SubComponents/ProposalSend';
import Profile from './Views/Profile/SubComponents/UserProfile/Profile';
import SimpleSearch from './Views/Search/SimpleSearch';
import AnalyticalPart from './Views/Profile/SubComponents/AnalyticPart';
import { AvailableActiveItem } from './CommonComponents/ActiveIcon/ActiveIcon';
import ForumPage from './Views/Forum/Forum';
import './App.less';
import logoYellow from '../resources/bibliotheca_yellow.svg';
import logoBlue from '../resources/bibliotheca_blue.svg';
import EquipmentPart from './Views/Profile/SubComponents/EquipmentPart';
import ReviewSummary from './Views/Review/SubComponent/ReviewSummary';

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
                    <Menu icon compact vertical secondary className="fixed-center menu-buttons-left">
                        <AvailableActiveItem to="/search" fitted name="search" iconName="search" color="yellow" size={buttonSize} />
                        <AvailableActiveItem to="/propose" fitted name="proposal" iconName="cloud upload" color="yellow" size={buttonSize} />
                        <AvailableActiveItem to="/review" fitted name="review" iconName="star half" color="yellow" size={buttonSize} />
                        <AvailableActiveItem to="/ask" fitted name="question" iconName="envelope" color="yellow" size={buttonSize} />

                    </Menu>
                </div>
            </Grid.Column>
            <Grid.Column width={14}>
                <Switch>
                    <Route exact path="/" component={LoginWithCenterGrid} />
                    <Route path="/logo">
                        <LogoWithCenterGrid src={logoBlue} size="massive" />
                    </Route>
                    <Route path="/propose" component={Propose} />
                    <Route path="/articles" component={SearchResults} />
                    <Route path="/profilUpdate" component={FormLabUpdate} />
                    <Route path="/reviewForm" component={ReviewForm} />
                    <Route path="/ask" component={Ask} />
                    <Route path="/formLab" component={FormLab} />
                    <Route path="/analyticalPart" component={AnalyticalPart} />
                    <Route path="/equipmentPart" component={EquipmentPart} />
                    <Route path="/search" component={Search} />
                    <Route path="/partner" component={Partner} />
                    <Route path="/List" component={PartnerListLab} />
                    <Route path="/ReachoutList" component={ReachOutListLab} />
                    <Route path="/help" component={Help} />
                    <Route path="/reviewForm" component={ReviewForm} />
                    <Route path="/simpleSearch" component={SimpleSearch} />
                    <Route path="/requestSend" component={RequestSend} />
                    <Route path="/proposalSend" component={ProposalSend} />
                    <Route path="/profilType" component={Profile} />
                    <Route path="/forum" component={ForumPage} />
                    <Route path="/reviewSummary" component={ReviewSummary} />
                    <Route render={() => <h1>404 Error</h1>} />
                </Switch>
            </Grid.Column>


            <Grid.Column width={1} textAlign="center" color="blue" className="paddless-column">

                <Menu icon secondary className="fixed-top menu-buttons-right">
                    <AvailableActiveItem to="/profilUpdate" fitted name="user profile" iconName="user circle" color="yellow" size={buttonSize} />
                </Menu>

                <div className="vertical-center">
                    <Menu icon vertical secondary className="fixed-center menu-buttons-right">
                        <AvailableActiveItem to="/forum" fitted name="" iconName="discussions" color="yellow" size={buttonSize} />
                        <AvailableActiveItem to="/partner" fitted name="partner" iconName="users" color="yellow" size={buttonSize} />
                        <AvailableActiveItem to="/help" fitted name="equipment" iconName="question circle outline" color="yellow" size={buttonSize} />
                    </Menu>
                </div>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default withRouter(App);
