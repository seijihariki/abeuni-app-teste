import { StatusBar, StyleSheet } from 'react-native';

import Theme from './theme';

export default styles = StyleSheet.create({
    status_bar_padding: {
        height: StatusBar.currentHeight,
        backgroundColor: Theme.palette.primaryColor
    }
});

module.exports = styles;
