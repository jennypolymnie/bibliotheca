import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from './store/store';
import App from './components/App';
import 'semantic-ui-less/semantic.less';
import './index.css';


// import initial state
import AppUsers from './components/data/AppUsers';
import UpdateProfile from './components/data/UpdateProfile';
import Dropdown from './components/data/Dropdown';

const initialState = {
    updateProfile: UpdateProfile,
    users: AppUsers,
    reachOutDropdown: Dropdown,
    router: {}
};
const store = configureStore(initialState);

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App history={history} />
        </BrowserRouter>
    </Provider>,
    document.querySelector('#app') // eslint-disable-line no-undef
);

// Needed for Hot Module Replacement
if (typeof (module.hot) !== 'undefined') { // eslint-disable-line no-undef
    module.hot.accept(); // eslint-disable-line no-undef
}
