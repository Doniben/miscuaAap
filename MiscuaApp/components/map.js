import React, { Component } from 'react';
import { Constants, MapView, LinearGradient } from 'expo';
import  Maps  from './mapInterface';

import {
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform,
    SafeAreaView
} from 'react-native';
// import { withTheme } from 'react-native-elements';

export function map({ navigation }){
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                        <TouchableOpacity>
                            <Image style={styles.miscuaLogo}
                                source={require('../assets/img/logo.png')}
                            />  
                        </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('atentionLines')}>
                        <Image style={styles.rightInfo}
                            source={require('../assets/img/info.png')}
                        />  
                    </TouchableOpacity>
            <View style={styles.mapContainerGeneral}>
                </View>
                <View style={styles.homeContainer}>
                    <View style={styles.homeArrive}>
                        <TouchableOpacity onPress={() => navigation.push('main')}>
                            <Image style={styles.rightHomeArrive}
                                source={require('../assets/img/here.png')}
                            />  
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.map}>
                    <Maps />
                </View>
                <View style={styles.footerView}>
                    <TouchableOpacity onPress={() => navigation.navigate('mapOptions')}>
                        <Image
                        style={styles.optionsMap}
                        source={require('../assets/img/cone.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

        )
    }

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'white'
    },
    mapContainerGeneral: {
        backgroundColor: 'rgba(52, 52, 52, 0.7)',
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginTop: 0,
        height: '12%',
        alignItems: 'center',
        alignContent: 'center'
    },
    miscuaLogo: {
        width: 30,
        height: 35,
        margin: 25,
        marginLeft: 30,
        marginTop: Platform.select({
            android: 45
        })
    },
    rightInfo: {
        width: 30,
        height: 30,
        marginRight: 30,
        marginTop: Platform.select({
            android: 25
        })
    },
    homeContainer: {
        position: 'absolute',
        marginTop: 90,
        right: 0,
        zIndex: 1
    },

    homeArrive: {
        flexDirection: 'row',
        width: 60,
        height: 60,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: 20,
        backgroundColor: 'rgb(51, 225, 237)',
        borderRadius: 10,
        shadowRadius: 0.4,
        shadowOpacity: 0.4,
        zIndex: 1
    },
    rightHomeArrive: {
        margin: 5,
        marginTop: 30,
        width: 45,
        height: 45,
        shadowRadius: 0.6,
        shadowOpacity: 0.3,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    map: {
        height: '100%',
        width: '100%',
        position: 'relative',
        marginTop: Platform.select({
            ios: 20
        })
    },
    footerView: {
        position: "absolute",
        justifyContent: 'flex-end',
        right: 0,
        bottom: 0,
        marginBottom: 10,
        shadowRadius: 0.4,
        shadowOpacity: 0.3,
    },
    optionsMap: {
        width: 60,
        height: 60,
        marginRight: 20,
        margin: 5,
    }
})