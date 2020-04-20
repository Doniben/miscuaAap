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
import { ScrollView } from 'react-native-gesture-handler';

export function howto({ navigation }) {  
        return (
            
                <View style={styles.howToContainer}>
            <SafeAreaView style={styles.safe}>
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
                        <View style={styles.optionButtons}>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('atentionLines')}>
                                <Text style={styles.textButton}>
                                    IMFORMACIÓN
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('main')}>
                                <Text style={styles.textButton}>
                                    SALTAR
                                </Text>
                            </TouchableOpacity>
                        </View>
                        </SafeAreaView>
                    </View>
        )};

const styles = StyleSheet.create({
    safe: {
        backgroundColor: 'rgb(45, 45, 68)',
    },
    howToContainer: {
        backgroundColor: 'rgb(45, 45, 68)',
        width:'100%',
        height:'100%',
    },
    headerContainer: {
        backgroundColor: 'rgb(45, 45, 68)',
        alignItems: 'center', 
        marginTop: 20,
    },
    logo: {
        width: 260, 
        height: 160, 
        padding: 10,
        paddingBottom: 0,
        resizeMode: 'contain'
    },
    tittle: {
        marginTop: 5,
        marginBottom: 20
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
    },
    sectionBoldTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },

    textVideo: {
        fontSize: 16,
        color: 'rgb(162, 162, 162)',
        marginBottom:0,
        textAlign: 'center',   
    },
    imageVideo: {
        marginTop:-80,
        resizeMode: "contain",
        width: '80%',
        alignSelf: 'center',
        
    },

    optionButtons: {        
        flexDirection: 'row', 
        alignItems: 'flex-end',
        justifyContent: 'center'
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
        shadowOpacity: 0.4,
        marginTop:Platform.select({
            ios: 0,
            android: -50
        }),
        marginBottom:Platform.select({
            ios: 20,
            android: 100
        }),
    },
    textButton: {
        fontSize: 16,
        color: 'white'

    }
        
})