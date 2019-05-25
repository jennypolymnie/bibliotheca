import { applyMiddleware, createStore, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { routerMiddleware } from 'connected-react-router';

// import the root reducer
import rootReducer from './reducers/rootReducer';

const persistConfig = {
    key: 'root',
    storage
};

export const history = createBrowserHistory();

export default function configureStore(defaultState) {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        persistReducer(persistConfig, rootReducer(history)), defaultState,
        composeEnhancer(
            applyMiddleware(
                routerMiddleware(history),
            ),
        ),
    );
    const persistor = persistStore(store);
    return { store, persistor };
}
