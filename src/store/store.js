import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';


// import the root reducer
import rootReducer from './reducers/rootReducer';

export const history = createBrowserHistory();
export default function configureStore(defaultState) {
    const store = createStore(
        rootReducer(history), defaultState,
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history),
            ),
        ),
    );
    return store;
}
