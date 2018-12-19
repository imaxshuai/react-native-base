import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import StackViewStyleInterpolator from "../utils/navigation-animation/StackViewStyleInterpolator";

import LoginScreen from '../containers/Login';
import HomeScreen from '../containers/Home';

const rootNavigator = createStackNavigator({
        Login: LoginScreen,
        Home: HomeScreen,
    },{
        transitionConfig: (scene)=>({screenInterpolator: StackViewStyleInterpolator.forHorizontal})
    }
);

export default rootNavigator;
