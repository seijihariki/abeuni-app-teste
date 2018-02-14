import React from 'react';
import { StatusBar, Text, View } from 'react-native';

import * as firebase from "firebase";

import { Toolbar, Button } from 'react-native-material-ui';

import Theme from '../theme';
import Styles from '../styles';

// Login Screen Class
export default class LoginScreen extends React.Component {
    // React Navigation Options
    static navigationOptions = ({navigation}) => ({
        title: 'Login'
    });

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
            <View>
                <StatusBar
                    translucent={false}
                    backgroundColor={Theme.palette.primaryColor}
                    barStyle="light-content" />
                <View style={Styles.status_bar_padding} />
                <Toolbar leftElement="menu" />
                <Button raised primary
                    text='Home'
                    onPress={() => this.props.navigation.navigate('Home')} />
                <Button raised primary
                    text='Debug'
                    onPress={() => console.log(this.props.navigation)} />
            </View>
        );
        return (
            <Text>
            Login
            </Text>
        );
    }

    // After rendering - 4th stage
    componentDidMount() {
    };

    // Support functions
}

module.exports = LoginScreen;
