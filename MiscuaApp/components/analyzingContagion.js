import React, { Component } from 'react';
import DotSpinner from './loadingSpinners/dotSpinner'

import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform,
    SafeAreaView
} from 'react-native';
// import { withTheme } from 'react-native-elements';

export function analyzingContagion({ navigation }){
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.Container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('main')}>
                        <Image style={styles.leftNavigation}
                            source={require('../assets/img/back-50.png')}
                        />  
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('atentionLines')}>
                        <Image style={styles.rightInfo}
                            source={require('../assets/img/info.png')}
                        />  
                    </TouchableOpacity>
                </View>
            {/* <View style={styles.analyzingContainer}> */}
                <View style={styles.analysingImage}>
                    <Image 
                        style={styles.riesgo}
                        source={require('../assets/img/virusFemale.png')}/>
                    <Text style={styles.riesgoText}>
                        RIESGO DE CONTAGIO
                    </Text>
                </View>
                <View>
                    <Text style={styles.description}>
                        ANALIZANDO {'\n'} TU HOJA DE RUTA
                    </Text>
                </View>
                <View>
                    <DotSpinner />
                </View>
                <View style={styles.footerView}>
                    <TouchableOpacity onPress={() => navigation.navigate('creators')}>
                        <Image
                        style={styles.creatorsButton}
                        source={require('../assets/img/logo.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

        )
    }

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'rgb(30, 30, 44)'
    },
    Container: {
        backgroundColor: 'rgb(30, 30, 44)',
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: Platform.select({
            ios: 0,
            android: 10
        })
    },
    leftNavigation: {
        width: 10,
        height: 30,
        margin: 30,
        marginLeft: 30,
    },
    rightInfo: {
        width: 30,
        height: 30,
        marginRight: 30,
        marginTop: 30,
    },

    analysingImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '65%',
        height: '35%',
        backgroundColor: 'rgb(45, 45, 68)',
        borderRadius: 30,
        marginHorizontal: 5,
        shadowRadius: 0.6,
        shadowOpacity: 0.7,
        marginBottom: 20,
        marginTop: 20,
    },

    riesgo: {
        width: '50%',
        height: '54%',
        marginVertical: 10
    },
    riesgoText: {
        fontSize: 18,
        color: 'rgb(51, 225, 237)',
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    tittle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,

    },
    description: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 40,
        color: 'white',
        marginBottom: 40,
        fontWeight: 'bold'
    },
    defaultButtonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#25CAC6',
      },
    
    footerView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: Platform.select({
            ios: 120,
            android: 35
        }),
        marginBottom: Platform.select({
            ios: 70,
            android: 0
        })

    },
    creatorsButton: {
        width: 30,
        height: 30,
        marginRight: 30,
        marginBottom: 20,
    }
})