import React from 'react';
import { View } from "react-native";
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'

import configureStore from "../redux/store/configureStore";
import ReduxNavigation from "./ReduxNavigation";

const { store, persistor } = configureStore();


export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <ReduxNavigation/>
                </PersistGate>
            </Provider>
        );
    }
}