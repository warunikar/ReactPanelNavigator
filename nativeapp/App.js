import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomePage from "./pages/HomePage";
import LinkUserPage from "./pages/LinkUserPage";
import AddNewUserPage from "./pages/AddNewUserPage";
import localStrings from "./resources/localStrings";

const RootStack = createStackNavigator(
{
    Home: {
        screen: HomePage
    },
    LinkUser: {
        screen: LinkUserPage
    },
    AddNewUser: {
        screen: AddNewUserPage
    },
},
{
    initialRouteName: 'Home'
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}