import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { location } from './mapInterface'
import { createMarker } from './apiRequest'


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

export function mapOptions({ navigation }){
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.Container}>
                <View style={styles.confirmationContainer}>
                    <View>
                        <Text style={styles.tittle}>
                            REPORTAR
                        </Text>
                    </View>
                    <View style={styles.image}>
                        <Image
                        style={styles.imageOnTheMap}
                        source={require('../assets/img/3x/report.png')}
                        />
                    </View>
                    <View>
                        <Text style={styles.description}>
                            PUEDES USAR ESTA SECCIÓN {'\n'}PARA MARCAR EN EL MAPA:
                        </Text>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.buttonYes} onPress={() => {
                            createMarker('AGLOMERACION DE PERSONAS')
                            navigation.navigate('map')
                            }}>
                            <LinearGradient style={styles.loginBtn}  colors={['rgb(11, 191, 214)', 'rgb(90, 204, 193)']}>
                                <Text style={styles.textButton}>
                                    AGLOMERACIÓN DE PERSONAS
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.buttonYes} onPress={() => {navigation.navigate('main')}}>
                            <LinearGradient style={styles.loginBtn}  colors={['rgb(11, 191, 214)', 'rgb(90, 204, 193)']}>
                                <Text style={styles.textButton}>
                                    ESTABLECIMIENTO EN CUARENTENA
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.buttonYes} onPress={() => navigation.navigate('main')}>
                            <LinearGradient style={styles.loginBtn}  colors={['rgb(11, 191, 214)', 'rgb(90, 204, 193)']}>
                                <Text style={styles.textButton}>
                                    REGISTRO DE CASO CON PRESENCIA MÉDICA
                                </Text>
                            </LinearGradient>
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
    }

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'rgb(45, 45, 68)'
    },
    Container: {
        backgroundColor: 'rgb(45, 45, 68)',
        width: '100%',
        height: '100%'
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
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
    confirmationContainer: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',

    },
    tittle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 50,

    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        height: 150,
        width: 150,
    },

    imageOnTheMap: {
        height: 150,
        width: 150,
    },

    description: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        color: 'white',
        marginBottom: 20
    },

    buttons: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
    },

    buttonYes: {
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 8,
        height: 50,
        marginBottom: 0,
        margin: 10,
        shadowOpacity: 0.4,
        width: '100%',
        marginTop: 30
    },
    loginBtn:{
        width:"100%",
        borderRadius: 5,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        alignSelf: 'center'
      },

    textButton: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    footerView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: Platform.select({
            ios: 20,
            android: 15
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