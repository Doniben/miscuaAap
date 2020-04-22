import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
    Image,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Platform,
    SafeAreaView
} from 'react-native';

export function main({ navigation }){
    return (
        <SafeAreaView style={styles.safeContainer}>                
            <View style={styles.mainContainer}>
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

                <View style={styles.threeButons}>
                    <View style={styles.mainSectionContainer}>
                        <View>
                            <Image 
                                style={styles.mainStatic}
                                source={require('../assets/img/walk.png')}
                            />
                        </View>
                        <TouchableOpacity onPress= {() => navigation.navigate('map')}>
                            <Text style={styles.exitButton}>
                                VOY A SALIR DE CASA
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.riskAndPositive}>
                        <TouchableOpacity style={styles.secondButtons}>
                            <Image 
                                style={styles.riesgo}
                                source={require('../assets/img/virusFemale.png')}/>
                            <Text style={styles.riesgoText}>
                                RIESGO DE CONTAGIO
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.secondButtons} onPress={() => navigation.navigate('positiveConfirmation')}>
                            <Image 
                                style={styles.riesgo}
                                source={require('../assets/img/virusPositivo.png')}/>
                            <Text style={styles.riesgoText}>
                                SOY POSITIVO COVID-19
                            </Text>
                        </TouchableOpacity>
                    </View>
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
    };

const styles = StyleSheet.create({
    
    mainContainer: {
        alignItems: 'center',
        fontFamily: 'Montserrat-Medium',
        width:'100%',
        height:'98.5%',
        backgroundColor: 'white',
        marginBottom: Platform.select({
            ios: 55,
            android: 20
        })
    },
    safeContainer: {
        backgroundColor: 'white',
        margin: 0
    },

    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: Platform.select({
            ios: 0,
            android: 5
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
        margin: 30,
    },

    threeButons: {
        marginTop: Platform.select({
            ios: 30,
            android: 0,
        }),
        width: '100%',
        justifyContent: 'center'
    },

    mainStatic: {
        width: '100%',
        height: 210,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: 20,
    },

    mainSectionContainer: {
        width: '100%',
    },
    exitButton: {
        alignSelf: 'center',
        fontSize: 14,
        backgroundColor: 'rgb(11, 191, 214)',
        borderRadius: 5,
        height: 40,
        width: '60%',
        alignItems: 'center',
        textAlign: 'center',
        paddingVertical: 10,
        color: 'white',
        fontWeight: 'bold',
        margin: 10,
        shadowOpacity: 0.3
    },

    riskAndPositive: {
        justifyContent: 'center',
        flexDirection: 'row', 
        height: 250,
        width: '100%',
    },

    secondButtons: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        height: '70%',
        backgroundColor: 'rgb(45, 45, 68)',
        borderRadius: 30,
        marginHorizontal: 5,
        shadowRadius: 0.3,
        shadowOpacity: 0.3,
        marginBottom: 20,
        marginTop: 20
    },

    riesgo: {
        width: '50%',
        height: '54%',
        borderRadius: 20,
        marginVertical: 10
    },
    riesgoText: {
        fontSize: 16,
        color: 'rgb(51, 225, 237)',
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 30,
        marginBottom: 10,
    },

    footerView: {
        width: '100%',
        height: '50%',
        borderBottomColor: 'yellow',
        alignItems: 'flex-end',
        
    },
    creatorsButton: {
        width: 40,
        height: 40,
        marginRight: 30,
        marginBottom: 20,
        marginTop: Platform.select({
            ios: '30%',
            android: '-5%'
        })
    }
})