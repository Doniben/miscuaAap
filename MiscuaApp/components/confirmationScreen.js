import React, { Component } from 'react';
import { Permissions } from 'expo-permissions'

import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform,
    SafeAreaView
} from 'react-native';
import { Audio } from 'expo-av';


export function confirmationScreen({ navigation, navigation: { goBack } }) {
    async function coffin() {
        await Audio.Sound.createAsync(
            require('../assets/coffinSong.mp3'),
            { shouldPlay: true }
        );
    }
    coffin();
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
                <View style={styles.confirmationContainer}>
                    <View>
                        <Text style={styles.tittleHelp}>
                            TE AYUDAREMOS
                            </Text>
                    </View>
                    <View>
                        <Text style={styles.description}>
                            Nos hemos contactado con los organismos de salud que pueden
                            ayudar a agilizar tu atención, así podremos definir tu estado
                            y entre todos poder salir de la mejor manera de esta situación
                            que nos importa a todos.
                            </Text>
                    </View>
                    <View>
                        <View>
                            <Image
                                style={styles.logo}
                                source={require('../assets/img/tenor.gif')} />
                        </View>
                        <View style={styles.tittle}>
                            <Text><Text style={styles.sectionTitle}>COLOMBIA </Text><Text style={styles.sectionBoldTitle}>UNIDA</Text></Text>
                        </View>
                    </View>
                </View>
                <View style={styles.footerView}>
                    <TouchableOpacity onPress={async () => {
                        navigation.navigate('creators')
                    }
                    }>
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
        backgroundColor: 'rgb(45, 45, 68)',
    },
    Container: {
        backgroundColor: 'rgb(45, 45, 68)',
        width: '100%',
        height: '100%',
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
    tittleHelp: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 30,

    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 40,
        color: 'white',
        marginBottom: 40
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
            ios: 50,
            android: 5
        })
    },
    tittle: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    creatorsButton: {
        width: 30,
        height: 30,
        marginRight: 30,
        marginBottom: 10,
    },
    logo: {
        width: 260,
        height: 180,
        padding: 10,
        paddingBottom: 0,
        resizeMode: 'contain',
        marginTop: Platform.select({
            ios: 20,
            android: 10
        }),
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

})