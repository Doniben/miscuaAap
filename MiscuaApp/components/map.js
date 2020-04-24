import React, { Component } from 'react';

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
            <View style={styles.mapContainerGeneral}>
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
                </View>
                <View style={styles.mapContainer}>
                    <View style={styles.homeArrive}>
                        <TouchableOpacity onPress={() => navigation.navigate('mapOptions')}>
                            <Image style={styles.rightHomeArrive}
                                source={require('../assets/img/here.png')}
                            />  
                        </TouchableOpacity>
                    </View>
                    <View>

                        {/* Map Here */}

                    </View>
                    
                </View>
                <View style={styles.footerView}>
                    <TouchableOpacity onPress={() => navigation.navigate('main')}>
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
        position: "relative",
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginTop: Platform.select({
            ios: 0,
            android: 15
        })
    },

    homeArrive: {
        flexDirection: 'row',
        width: 70,
        height: 70,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: 20,
        backgroundColor: 'rgb(51, 225, 237)',
        borderRadius: 10,
        shadowRadius: 0.4,
        shadowOpacity: 0.4,
    },
    rightHomeArrive: {
        margin: 10,
        marginTop: 30,
        width: 50,
        height: 50,
        shadowRadius: 0.6,
        shadowOpacity: 0.3,
        justifyContent: 'center',
        alignSelf: 'center'

    },
    miscuaLogo: {
        width: 30,
        height: 35,
        margin: 20,
        marginLeft: 30,
    },
    rightInfo: {
        width: 30,
        height: 30,
        marginRight: 30,
        marginTop: 30,
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