import React, { Component, useEffect, useState, useMemo } from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList,
    Dimensions,
    ScrollView
} from 'react-native';
import moment from 'moment'
import 'moment/locale/es';
import EventData from '../utils/EventData';
import styles2 from '../styles/supportS';
import styles3 from '../styles/buttons';
// import { YellowBox } from 'react-native';

// YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Item = ({ item, onPress }) => {

    moment.locale('es');


    return (
        <TouchableOpacity onPress={onPress} style={[styles.item]}>
            <View style={styles.listItemInfo}>
                <Image
                    style={styles.image}
                    source={{
                        uri:
                            'https://greenerappdr.herokuapp.com' +
                            item.image[0].formats.thumbnail.url,
                    }}
                />
                <View style={styles.titleAndAddressView}>
                    <Text style={styles3.eventButtonText}>{item.title}</Text>
                    <Text style={styles3.eventButtonDate}>{moment(item.datetime).locale('es').format('llll')}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default function EventList({ navigation, route }) {

    const cat = route.params.category;

    moment('01/12/2016', 'DD/MM/YYYY', true).format()

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => {
                    navigation.navigate('EventSingle', item);
                }}
            />
        );
    };

    const [eventsList, setEventsList] = useState(null);

    useEffect(() => {
        EventData()
            .then(data => {
                setEventsList(data);
                //console.log(data[0].eventType.type, data[0].eventType.id)
                return data
            })
    }, []);


    const eventsOfType = useMemo(() => eventsList?.filter((individualEvent) => {
        return cat === 'Todos' || individualEvent.eventType.type === cat
    }), [eventsList, cat])



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
                <View style={{ flex: 1, alignItems: 'center', marginVertical: 30, }}>
                    <Text style={styles2.title}>{cat} </Text>
                    {
                        eventsOfType && eventsOfType.length ? <>
                            <FlatList style={styles.container}
                                data={eventsOfType}
                                renderItem={renderItem}
                                keyExtractor={item => item.id.toString()}

                            />
                            <Text style={styles3.kindabrown}>Total de eventos: {eventsOfType.length}</Text>
                        </>
                            : <Text style={styles.noInternetContainer}>No hay eventos de {cat} disponibles.</Text>

                    }
                </View>
            </View>
        </SafeAreaView >
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        width: windowWidth,
        height: windowHeight,
    },
    image: {
        width: windowWidth * 0.35,
        height: windowHeight * 0.12,
        borderRadius: 8,
    },
    mapStyle: {
        width: windowWidth,
        height: windowHeight,
    },
    actionComponents: {
        alignItems: 'center',
        position: 'absolute',
        width: windowWidth,
        height: windowHeight,
        marginTop: windowHeight * 0.1,
    },
    list: {
        position: 'absolute',
        margin: windowHeight * 0.055,
        width: '100%',
    },
    item: {
        padding: 10,
        marginRight: windowWidth * 0.01,
        marginTop: windowHeight * 0.015,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#372a0c',
        height: windowHeight * 0.16,
        marginLeft: windowWidth * 0.01,
    },
    listButttonView: {
        alignItems: 'center',
        position: 'absolute',
        bottom: windowHeight * 0.005,
        height: windowWidth * 0.15,
        left: windowWidth * 0.48,
    },
    touchableView: {
        flexDirection: 'row',
    },
    imgMenuList: {
        marginRight: windowWidth * 0.03,
    },
    listButtton: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderWidth: 2,
        borderColor: '#372a0c',
        borderRadius: 15,
    },
    selectedOption: { color: '#fff' },
    notSelectedOption: { color: '#000000' },
    noInternetScreen: {
        width: windowWidth,
        height: windowHeight,
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    noInternetContainer: {
        marginTop: windowHeight * 0.35,
        marginBottom: windowHeight * 0.35,
        marginRight: windowWidth * 0.05,
        marginLeft: windowWidth * 0.05,
    },
    bottomSheet: {
        backgroundColor: 'white',
        width: windowWidth,
        height: windowHeight * 0.50,
        padding: windowWidth * 0.016,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgCloseMenuList: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});
