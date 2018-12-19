import React, {Component} from 'react';
import {BackHandler} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from "react-navigation";

import RootNavigator from "../route/rootNavigator";
import {reduxifyNavigator} from "react-navigation-redux-helpers";

const AppNavigator = reduxifyNavigator(RootNavigator, "root");

// create nav component
class ReduxNavigation extends Component {
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        const {navigation, dispatch} = this.props;
        if (navigation.index === 0) {
            return false;
        }

        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        const {navigation, dispatch} = this.props;

        return <AppNavigator state={navigation} dispatch={dispatch}/>;
    }
}

const mapStateToProps = state => ({
    navigation: state.nav,
});

export default connect(mapStateToProps)(ReduxNavigation);