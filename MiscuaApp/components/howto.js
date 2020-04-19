import React, { Component } from 'react';

import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform,
    SafeAreaView
} from 'react-native';

export function howto({ navigation }) {  
        return (
            <SafeAreaView style={styles.safe}>

                <View style={styles.howToContainer}>
                    <View style={styles.headerContainer}>
                        <View>
                            <Image
                                style={styles.logo}
                                source={require('../assets/img/01.png')}/>
                        </View>
                        <View style={styles.tittle}>
                            <Text><Text style={styles.sectionTitle}>COLOMBIA </Text><Text style={styles.sectionBoldTitle}>UNIDA</Text></Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.textVideo}>
                            En el siguiente video te informaremos cómo
                            usar la aplicación y cómo entre todos podemos
                            contribuir y sobresalir de la amenaza del COVID-19
                        </Text>
                    </View>
                    <View>
                        <Image
                            style={styles.imageVideo}
                            source={require('../assets/img/yt_player.png')}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 35 }}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textButton}>
                                IMFORMACIÓN
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textButton}>
                                SALTAR
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )};

const styles = StyleSheet.create({
    safe: {
        backgroundColor: 'rgb(45, 45, 68)',
    },
    headerContainer: {
        backgroundColor: 'rgb(45, 45, 68)',
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%', 
        height: 230,
        marginTop: 20,
    },
    logo: {
        width: 260, 
        height: 140, 
        marginTop: 0,
        padding: 10,
        paddingBottom: 0,
        resizeMode: 'contain'
    },
    tittle: {
        marginTop: 10,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
        paddingTop: 10,
        textAlign: 'center',
    },

    sectionBoldTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 10,
        textAlign: 'center',
    },
    howToContainer: {
        flex: 1,
        justifyContent: 'center',
        width: '80%',
        marginTop: Platform.select({
            ios: 80,
            android: 15
        }),
        alignSelf: 'center'
    },
    textVideo: {
        fontSize: 16,
        color: 'rgb(162, 162, 162)',
        textAlign: 'center'
    },
    imageVideo: {
        resizeMode: "contain",
        width: 300,
        alignSelf: 'center',
        height: Platform.select({
            ios:300,
            android:220
        })
    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'rgb(11, 191, 214)',
        borderRadius: 5,
        width: 10,
        height: 35,
        marginBottom: 35,
        margin: 10,
        shadowOpacity: 0.4
    },
    textButton: {
        fontSize: 16,
        color: 'white'

    }
        
})