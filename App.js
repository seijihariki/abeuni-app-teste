import React from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import * as firebase from "firebase";

import Theme from './src/theme';
import Styles from './src/styles';

import { Constants, Font, AppLoading } from 'expo';

import { ThemeProvider, Toolbar, Drawer } from 'react-native-material-ui';

// Screens
import HomeScreen from './src/screens/HomeScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';
/**/

/*
    // Home Screen Class
class HomeScreen extends React.Component {
    // App Setup - Lifecycle stages

    // App constructor - 1st stage
    constructor(props) {
        super(props);

        // Initializes state
        this.state = {
        };
    }

    // Before rendering - 2nd stage
    componentWillMount() {
    }

    // Renders screen - 3rd stage
    render() {
        return (
            <Text>
                Yolo
            </Text>
        );
    }

    // After rendering - 4th stage
    componentDidMount() {
    };

    // Support functions
}
/**/

/*
    // Login Screen Class
class LoginScreen extends React.Component {
    // App Setup - Lifecycle stages

    // App constructor - 1st stage
    constructor(props) {
        super(props);

        // Initializes state
        this.state = {
        };
    }

    // Before rendering - 2nd stage
    componentWillMount() {
    }

    // Renders screen - 3rd stage
    render() {
        return null;
    }

    // After rendering - 4th stage
    componentDidMount() {
    };

    // Support functions
}
/**/


// Create Navigator App
const Navigator = DrawerNavigator({
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen }
},
    {
        initialRouteName: 'Home',
        navigationOptions: {
        }
    });
/**/


// Home Screen Class
export default class App extends React.Component {
    // App Setup - Lifecycle stages

    // App constructor - 1st stage
    constructor(props) {
        super(props);

        // Initializes state
        this.state = {
            materialIconsReady: false,
        };

        // Binding functions
    }

    // Before rendering - 2nd stage
    componentWillMount() {
        // Initializes Firebase App
        firebase.initializeApp({
            apiKey: "AIzaSyDVDefC3iAYzUnRxj2B5HtqHEoKqvYcKjo",
            authDomain: "hackathon-panda.firebaseapp.com",
            databaseURL: "https://hackathon-panda.firebaseio.com",
            projectId: "hackathon-panda",
            storageBucket: "hackathon-panda.appspot.com",
            messagingSenderId: "415762703810"
        });
    }

    // Renders screen - 3rd stage
    render() {
        if (!this.state.materialIconsReady)
            return null;

        return (
            <ThemeProvider uiTheme={Theme}>
                <Navigator/>
            </ThemeProvider>
        );
    }

    // After rendering - 4th stage
    async componentDidMount() {
        // Load MaterialIcons Font
        await Font.loadAsync({
            'MaterialIcons': require('./assets/fonts/MaterialIcons-Regular.ttf')
        });

        this.setState({materialIconsReady: true});
    };

    // Support functions
}
/**/
