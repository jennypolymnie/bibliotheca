import React from 'react';
import ReactDom from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import App from './components/App';
import 'semantic-ui-less/semantic.less';
import './index.css';


// import initial state
import AppUsers from './components/data/AppUsers';
import profile from './components/data/Profile';
import Dropdown from './components/data/Dropdown';
// import userRequest from './components/data/UserRequest';

const initialState = {
    profile,
    users: AppUsers,
    reachOutDropdown: Dropdown,
    router: {}
};
const { store, persistor } = configureStore(initialState);

ReactDom.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.querySelector('#app') // eslint-disable-line no-undef
);

// Needed for Hot Module Replacement
if (typeof (module.hot) !== 'undefined') { // eslint-disable-line no-undef
    module.hot.accept(); // eslint-disable-line no-undef
}
