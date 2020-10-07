import React, { Component, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from 'react-native';
import EventData from '../utils/EventData';
import styles from '../styles/buttons';
import styles2 from '../styles/supportS';

export default function EventList(props) {
    const { route } = props;
    const cat = route.params.category;

    useEffect(() => {
        EventData().then((Marker) => {
            console.log(Marker);
        });
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
                <View style={{ flex: 1, alignItems: 'center', marginVertical: 30, }}>
                    <Text style={styles2.title}>{cat} </Text>

                    <TouchableOpacity
                        style={styles.eventButton}
                        onPress={() => props.navigation.navigate('EventSingle', {
                            name: 'Limpieza de costas Playa Guibia',
                            date: 'Martes, 22 de Septiembre de 10:00 a 12:00'
                        })}>
                        <Image
                            source={require('../../assets/limpiezadeplaya.jpg')}
                            style={styles.iconEvent}
                        />
                        <Text style={styles.eventButtonDate}>MAR., 22 SEP. 2020</Text>
                        <Text style={styles.eventButtonText}>Limpieza de costas Playa Guibia</Text>
                    </TouchableOpacity>
                    <Text style={styles.seeAll}>Total de eventos: 1</Text>
                </View>
            </View>
        </SafeAreaView >
    );
}
