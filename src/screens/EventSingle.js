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

export default function EventSingle(props) {
    const { route } = props;
    const id = route.params.id;

    console.log(props);
    return (
        <View>
            <Text>Event ID: {id}</Text>
        </View>
    );
}
