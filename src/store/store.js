import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/indexReducer';


// import data
import users from '../components/views/PartnerStudy/PartnerListLab/Users';
import AmplificationAutosomChemistry from '../components/data/AmplificationAutosomChemistry';
import AmplificationYChemistry from '../components/data/AmplificationYChemistry';
import BloodTest from '../components/data/BloodTest';
import ExtractionChemistry from '../components/data/ExtractionChemistry';
import QuantificationChemistry from '../components/data/QuantificationChemistry';
import SalivaTest from '../components/data/SalivaTest';
import SpermTest from '../components/data/SpermTest';

// create an object for the default data
const defaultState = {
    users,
    AmplificationAutosomChemistry,
    AmplificationYChemistry,
    BloodTest,
    ExtractionChemistry,
    QuantificationChemistry,
    SalivaTest,
    SpermTest
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
