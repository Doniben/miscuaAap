import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { withTheme } from 'react-native-elements';

export function atentionLines({ navigation }){
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView>
                <View style={styles.Container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.navigate('main')}>
                            <Image style={styles.leftNavigation} 
                                source={require('../assets/img/back-50.png')}
                            />  
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.rightInfo}
                                source={require('../assets/img/info.png')}
                            />  
                        </TouchableOpacity>
                    </View>
                    <View style={styles.confirmationContainer}>
                        <View>
                            <Text style={styles.tittle}>
                            LÍNEAS DE ATENCIÓN
                            </Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.description}>
                                SI TIENES UNA INQUIETUD SOBRE EL
                                COVID-19 COMUNÍQUESE A ESTA LÍNEA
                                HABILITADA POR EL MINISTERIO DE SALUD:
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 10 }}>
                                <Text style={styles.phone}>
                                    DESDE CELULAR
                                </Text>
                                <Text style={styles.phoneNumber}>
                                    192
                                </Text>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'rgb(51, 225, 237)',
                                    borderBottomWidth: 3,
                                }}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 10 }}>
                                <Text style={styles.phone}>
                                    DESDE FIJO
                                </Text>
                                <Text style={styles.phoneNumber}>
                                    3305041
                                </Text>
                            </View>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.description}>
                                SI NECESITAS ALGUNA AYUDA O UN
                                APOYO EMOCIONAL POR FAVOR LLAMA AL:
                            </Text>
                            <View style={{ justifyContent: 'center', paddingVertical: 10 }}>
                                <Text style={styles.phone}>
                                    DESDE FIJO O CELULAR
                                </Text>
                                <Text style={styles.phoneNumber}>
                                    106
                                </Text>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'rgb(51, 225, 237)',
                                    borderBottomWidth: 3,
                                }}
                            />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.description}>
                                PARA REPORTAR SIN SALIR DE CASA UN
                                POSIBLE CASO DE COVID-19 O PARA
                                NOTIFICAR UNA EMERGENCIA DE 
                                CUALQUIER TIPO, LLAMA AL:
                            </Text>
                            <View style={{ justifyContent: 'center', paddingVertical: 10 }}>
                                <Text style={styles.phone}>
                                    DESDE FIJO O CELULAR
                                </Text>
                                <Text style={styles.phoneNumber}>
                                    123
                                </Text>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'rgb(51, 225, 237)',
                                    borderBottomWidth: 3,
                                }}
                            />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.description}>
                                LÍNEA PURPURA
                                LLAMA ANTE CUALQUIER CASO DE VIOLENCIA
                                CONTRA UNA MUJER.
                                COMUNÍCATE PARA RECIBIR ASESORÍA SOBRE
                                TUS DERECHOS HUMANOS, SEXUALES Y 
                                REPRODUCTIVOS COMO MUJER
                            </Text>
                            <View style={{ justifyContent: 'center', paddingVertical: 10 }}>
                                <Text style={styles.phone}>
                                    DESDE FIJO O CELULAR
                                </Text>
                                <Text style={styles.phoneNumber}>
                                    018000112137
                                </Text>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'rgb(51, 225, 237)',
                                    borderBottomWidth: 3,
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.footerView}>
                        <TouchableOpacity>
                            <Image
                            style={styles.creatorsButton}
                            source={require('../assets/img/logo.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'rgb(30, 30, 44)'
    },
    Container: {
        backgroundColor: 'rgb(30, 30, 44)',
        paddingBottom: 30

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
        width: '80%',

    },
    tittle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        borderBottomColor: 'rgb(51, 225, 237)',
        borderBottomWidth: 3

    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
        color: 'white',
        marginBottom: 10
    },

    textContainer: {
        backgroundColor: 'rgb(45, 45, 68)',
        borderRadius: 25,
        padding: 20,
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 30,
    },

    phone: {
        color: 'white',
        padding: 10,
        fontSize: 20,
        alignSelf: 'center'
    },

    phoneNumber: {
        color: 'white',
        padding: 5,
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
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