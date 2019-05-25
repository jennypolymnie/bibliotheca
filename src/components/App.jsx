
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import { Grid, Menu } from 'semantic-ui-react';
import SearchResults from './views/search-results/SearchResults';
import FormLab from './views/LabForm/FormLab';
import FormLabUpdate from './views/LabForm/FormLabUpdate';
import BooksellerRequest from './views/LibrarianRequest/BooksellerRequest';
import ArticleProposal from './views/LibrarianRequest/ArticleProposal';
import LibraryRequest from './views/LibraryRequest/LibraryRequest';
import PartnerStudy2 from './views/PartnerStudy/PartnerStudy2';
import PartnerListLab from './views/PartnerStudy/PartnerListLab/PartnerListLab';
import ReachOutListLab from './views/ReachOut/ReachOutListLab/ReachOutListLab';
import RequestAdvice from './views/ReachOut/RequestAdvice';
import ReviewForm from './views/Review/ReviewForm';
import { LogoWithCenterGrid, LoginWithCenterGrid } from './views/Home/CenterGrid';
import RequestSend from './views/LibrarianRequest/RequestSend';
import ProposalSend from './views/LibrarianRequest/ProposalSend';
import Profile from './views/Profile/Profile';
import MainPage from './views/Review/MainPage';
import AnalyticalPart from './views/LabForm/AnalyticPart';
import { AvailableActiveItem } from './views/Home/ActiveIcon';
import ForumPage from './views/forum/Forum';
import './App.less';
import logoYellow from '../resources/bibliotheca_yellow.svg';
import logoBlue from '../resources/bibliotheca_blue.svg';
import EquipmentPart from './views/LabForm/EquipmentPart';
import ReviewSummary from './views/Review/ReviewSummary';

// import { createRequireFromPath } from 'module';


const buttonSize = 'large';

const App = ({ history }) => (
    <ConnectedRouter history={history}>
        <Grid padded className="full-height">
            <Grid.Row>
                <Grid.Column width={1} color="blue" className="paddless-column">
                    <Menu icon compact secondary className="fixed-top menu-buttons-left">
                        <AvailableActiveItem to="/logo" src={logoYellow} name="request" color="yellow" size={buttonSize} />
                    </Menu>

                    <div className="vertical-center">
                        <Menu icon compact vertical secondary className="fixed-center menu-buttons-left">
                            <AvailableActiveItem to="/libraryRequest" fitted name="request" iconName="search" color="yellow" size={buttonSize} />
                            <AvailableActiveItem to="/proposals" fitted name="proposal" iconName="cloud upload" color="yellow" size={buttonSize} />
                            <AvailableActiveItem to="/searchorreview" fitted name="search" iconName="star half" color="yellow" size={buttonSize} />
                            <AvailableActiveItem to="/booksellerRequest" fitted name="question" iconName="question circle outline" color="yellow" size={buttonSize} />

                        </Menu>
                    </div>
                </Grid.Column>
                <Grid.Column width={14}>
                    <Switch>
                        <Route exact path="/" component={LoginWithCenterGrid} />
                        <Route path="/logo">
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
                        <Route path="/ReachoutList" component={ReachOutListLab} />
                        <Route path="/requestAdvice" component={RequestAdvice} />
                        <Route path="/reviewForm" component={ReviewForm} />
                        <Route path="/searchorreview" component={MainPage} />
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
                            <AvailableActiveItem to="/PartnerStudy" fitted name="partner" iconName="users" color="yellow" size={buttonSize} />
                            <AvailableActiveItem to="/requestAdvice" fitted name="equipment" iconName="universal access" color="yellow" size={buttonSize} />
                        </Menu>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </ConnectedRouter>
);

App.propTypes = {
    history: PropTypes.array.isRequired
};

export default App;
