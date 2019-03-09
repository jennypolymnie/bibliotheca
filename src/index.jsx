import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'; // react-router v4
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/store';
import App from './components/App';
import 'semantic-ui-less/semantic.less';
import './index.css';

// import data
import users from '../src/components/views/PartnerStudy/PartnerListLab/Users';
import AmplificationAutosomChemistry from '../src/components/data/AmplificationAutosomChemistry';
import AmplificationYChemistry from '../src/components/data/AmplificationYChemistry';


// // create an object for the default data
// const defaultState = {
//     users,
//     AmplificationAutosomChemistry,
//     AmplificationYChemistry,
//     BloodTest,
//     ExtractionChemistry,
//     QuantificationChemistry,
//     SalivaTest,
//     SpermTest
// };

const store = configureStore();

ReactDom.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ConnectedRouter>
    </Provider>,
    document.querySelector('#app') // eslint-disable-line no-undef
);

// Needed for Hot Module Replacement
if (typeof (module.hot) !== 'undefined') { // eslint-disable-line no-undef
    module.hot.accept(); // eslint-disable-line no-undef
}
