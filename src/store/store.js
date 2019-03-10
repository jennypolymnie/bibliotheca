import { applyMiddleware, createStore, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';


// import the root reducer
import rootReducer from './reducers/rootReducer';


export const history = createBrowserHistory();

export default function configureStore(defaultState) {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer(history), defaultState,
        composeEnhancer(
            applyMiddleware(
                routerMiddleware(history),
            ),
        ),
    );
    return store;
}
