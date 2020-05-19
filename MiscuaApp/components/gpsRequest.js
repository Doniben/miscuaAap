import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import {
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform,
    SafeAreaView,
    Text
} from 'react-native';
// import { withTheme } from 'react-native-elements';

export function gpsRequest({ navigation }){
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.gpsGeneralContainer}>
                <View style={styles.header}>
                    <TouchableOpacity>
 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('atentionLines')}>
                        <Image style={styles.rightInfo}
                            source={require('../assets/img/info.png')}
                        />  
                    </TouchableOpacity>
                </View>
                <View style={styles.gpsContainer}>
                    <Text style={styles.firstText}>
                        Permítenos el acceso { '\n'}
                        a tu localización GPS  
                    </Text>
                    <View style={styles.externalCircle}>
                        <View style={styles.internalCircle}>
                            <View style={styles.internalInternalCircle}>
                                <Image style={styles.gpsLogo}
                                    source={require('../assets/img/location.png')}
                                />
                            </View>
                        </View>
                    </View>
                    <Text style={styles.secondText}>
                            ASÍ RECONOCEREMOS LAS {'\n'}
                            ZONAS SEGURAS PARA TODOS {'\n'}
                            LOS COLOMBIANOS  
                    </Text>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => { navigation.navigate('map') }}>
                        <LinearGradient style={styles.loginBtn}  colors={['rgb(90, 204, 193)',  'rgb(11, 191, 214)']}>
                            <Text style={styles.loginText}>ACEPTO</Text>
                        </LinearGradient>
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
    gpsGeneralContainer: {
        backgroundColor: 'rgb(45, 45, 68)',
        width: '100%',
        height: '100%',
        position: "relative",
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(45, 45, 68)',
        marginTop: Platform.select({
            ios: 0,
            android: 15
        })
    },
    gpsContainer: {
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    firstText: {
        fontSize: 22,
        color: 'white',
        marginBottom: 40,
    },
    secondText: {
        fontSize: 22,
        color: 'white',
        marginBottom: Platform.select({
            ios: 80,
            android: 40,
        }),
        textAlign: 'center'
    },

    externalCircle: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        height: 215,
        width: 215,
        borderRadius: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },

    internalCircle: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        height: 146,
        width: 146,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    internalInternalCircle: {
        borderColor: 'white',
        height: 82,
        width: 82,
        borderRadius: 100,
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftNavigator: {
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
    },
    loginBtn:{
        width:"90%",
        borderRadius: 5,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        alignSelf: 'center',
        marginBottom: 20
      },
      loginText: {
        color: 'white',
        fontWeight:'bold',
        fontSize: 18
      },
    logoCreators: {
        position: 'relative',
        width: 50,
        height: 50,
        marginRight: 20,
    }
})