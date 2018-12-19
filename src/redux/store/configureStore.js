import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import {createStore, applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import { appReducer } from '../reducers';
import {compose} from "redux";

// create middleware
const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

const configureStore = (initialState)=>{
    let store = createStore(
        appReducer,
        initialState,
        compose(
            applyMiddleware(middleware, thunk, )
        )
    );
    let persistor = persistStore(store);

    return { persistor, store }
};

export default configureStore;