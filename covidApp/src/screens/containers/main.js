import React, { Component } from 'react';

import {
    Image,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Platform,
    SafeAreaView
} from 'react-native';

export default class Main extends Component {
    render() {
        return (
            <SafeAreaView style={styles.safeContainer}>
                <View style={styles.mainContainer}>
                    <View style={styles.header}>
                        <TouchableOpacity>
                            <Image style={styles.leftNavigation}
                                source={require('../../assets/img/back-50.png')}
                            />  
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.rightInfo}
                                source={require('../../assets/img/info.png')}
                            />  
                        </TouchableOpacity>
                    </View>    
                    <View style={styles.mainSectionContainer}>
                        <View>
                            <Image 
                                style={styles.mainStatic}
                                source={require('../../assets/img/walk.png')}
                            />
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.exitButton}>
                                VOY A SALIR DE CASA
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 50 }}>
                        <TouchableOpacity style={styles.secondButtons}>
                            <Image 
                                style={styles.riesgo}
                                source={require('../../assets/img/virusFemale.png')}/>
                            <Text style={styles.riesgoText}>
                                RIESGO DE CONTAGIO
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.secondButtons}>
                            <Image 
                                style={styles.riesgo}
                                source={require('../../assets/img/virusPositivo.png')}/>
                            <Text style={styles.riesgoText}>
                                SOY POSITIVO COVID-19
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footerView}>
                        <TouchableOpacity>
                            <Image
                            style={styles.creatorsButton}
                            source={require('../../assets/img/logo.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    
    mainContainer: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Montserrat-Medium',
        marginBottom: Platform.select({
            ios: 55,
            android: 0
        })
    },
    safeContainer: {
        backgroundColor: 'white'
    },

    mainStatic: {
        width: '80%',
        height: 210,
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: 20,
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

    mainSectionContainer: {
        width: '70%',
    },
    exitButton: {
        alignSelf: 'center',
        fontSize: 14,
        backgroundColor: 'rgb(11, 191, 214)',
        borderRadius: 5,
        height: 40,
        width: '90%',
        alignItems: 'center',
        textAlign: 'center',
        paddingVertical: 10,
        color: 'white',
        fontWeight: 'bold',
        margin: 10,
        shadowOpacity: 0.3
    },
    secondButtons: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 170,
        height: 175,
        backgroundColor: 'rgb(45, 45, 68)',
        borderRadius: 30,
        marginHorizontal: 5,
        shadowRadius: 0.3,
        shadowOpacity: 0.3,
        marginTop: Platform.select({
            ios: 30,
            android: -20
        })
    },

    riesgo: {
        width: '58%',
        height: '55%',
        borderRadius: 20,
        marginVertical: 10
    },
    riesgoText: {
        fontSize: 15,
        color: 'rgb(51, 225, 237)',
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 30,
        marginBottom: 10,
    },

    footerView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end',
        marginTop: Platform.select({
            ios: 45,
            android: -20
        })

    },
    creatorsButton: {
        width: 30,
        height: 30,
        marginRight: 30,
        marginBottom: 20,
    }
})