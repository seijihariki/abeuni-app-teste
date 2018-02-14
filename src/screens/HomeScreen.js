import React from 'react';
import { StatusBar, Text, View } from 'react-native';

import * as firebase from "firebase";

import { Toolbar, Button } from 'react-native-material-ui';

import Theme from '../theme';
import Styles from '../styles';

// Home Screen Class
export default class HomeScreen extends React.Component {
    // React Navigation Options
    static navigationOptions = ({navigation}) => ({
        title: 'Home'
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
                    text='Login'
                    onPress={() => this.props.navigation.navigate('Login')} />
                <Button raised primary
                    text='Debug'
                    onPress={() => console.log(this.props.navigation)} />
            </View>
        );
    }

    // After rendering - 4th stage
    componentDidMount() {
    };

    // Support functions
}

module.exports = HomeScreen;
