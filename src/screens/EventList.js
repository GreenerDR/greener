import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../styles/buttons';

export default class EventList extends Component {

    render() {
        const { navigation } = this.props;
        console.log(navigation);
        return (
            <View>
                <Text> Categoría: </Text>
            </View>
        );
    }
}
