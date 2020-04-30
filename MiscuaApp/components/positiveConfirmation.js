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
    SafeAreaView
} from 'react-native';
// import { withTheme } from 'react-native-elements';

export function positiveConfirmation({ navigation, navigation: { goBack } }){
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.Container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => goBack()}>
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
                <View style={styles.confirmationContainer}>
                    <View>
                        <Text style={styles.tittle}>
                            ¿Estás seguro?
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.description}>
                            Recuerda que de la veracidad de los datos y síntomas que 
                            nos brindes, podremos disminuir significativamente más casos 
                            de contagio y así ayudar a muchas personas con medidas preventivas.
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.buttonYes} onPress={()=>navigation.navigate('confirmationScreen')}>
                            <Text style={styles.textButton}>
                                SÍ
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.buttonNo} onPress={() => {navigation.navigate('main')}}>
                            <Text style={styles.textButton}>
                                NO TOTALMENTE
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.buttonCancel} onPress={() => navigation.navigate('main')}>
                            <Text style={styles.textButton}>
                                CANCELAR
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
        width: '80%',

    },
    tittle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,

    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 40,
        color: 'white',
        marginBottom: 40
    },
    buttonYes: {
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'rgb(11, 191, 214)',
        borderRadius: 8,
        height: 40,
        marginBottom: 0,
        margin: 10,
        shadowOpacity: 0.4,
        width: 250,
        marginTop: 30
    },
    buttonNo: {
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'rgb(102, 94, 255)',
        borderRadius: 8,
        height: 40,
        marginBottom: 0,
        margin: 10,
        shadowOpacity: 0.4,
        width: 250,
        marginTop: 30

    },
    buttonCancel: {
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'rgb(69, 79, 99)',
        borderRadius: 8,
        height: 40,
        marginBottom: 0,
        margin: 10,
        shadowOpacity: 0.4,
        width: 250,
        marginTop: 30

    },
    textButton: {
        fontSize: 16,
        color: 'white',
        
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