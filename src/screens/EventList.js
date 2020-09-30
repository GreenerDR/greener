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

export default function EventList(props) {
    const { route } = props;
    const cat = route.params.category;

    console.log(props);
    return (
        <View>
            <Text> Categoría: {cat} </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate('EventSingle', { id: '001' })}>
                <Text style={styles.buttonText}>Evento X</Text>
            </TouchableOpacity>
        </View>
    );
}
