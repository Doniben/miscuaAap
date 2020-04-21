import React, { useState } from 'react';

import {
    Text,
    Image,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    SafeAreaView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export function passwordRequest({ navigation }){
    const [enteredPhone, setEnteredPhone] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const numberInputHandler = inputText => {
        setEnteredPhone(inputText.replace(/[^0-9]/g, ''));
    };
    const ageInputHandler = inputText => {
        setEnteredAge(inputText.replace(/[^0-9]/g, ''));
    };
    const confirmInputHandler = () => {
        const confirmedPhone = enteredPhone;
        const confirmedPassword = enteredPassword;
        const confirmedAge = enteredAge;
        if (confirmedPhone === '' || confirmedPhone.length < 10 || confirmedPhone[0] !== '3'){
            Alert.alert('Ups','Ingresa un número válido')
            }
        else{
            if (confirmedAge === '' || confirmedAge.length > 2){
                Alert.alert('Ups', 'Revisa tu edad')
            }
            else{
                if (confirmedPassword.length === 0 || confirmedPassword.length < 8){
                    Alert.alert('Ups!','Tu contraseña debe contener almenos 8 caracteres')}
                    else{

                            const user = {
                                phone: '',
                                password: '',
                                age: ''
                                }
                            user['password'] = confirmedPassword;
                            user['phone'] = confirmedPhone;
                            user['age'] = confirmedAge;
                            console.log('Successful!', user);
                            setEnteredPhone('');
                            setEnteredAge('');
                            setEnteredPassword('');
                            Alert.alert('Bien!','Contraseña cambiada!');
                            navigation.navigate('login');
                        }
                }
            }                
        }         
        return (
            <TouchableWithoutFeedback onPress={()=>{
                Keyboard.dismiss();}}
            >
                
                <SafeAreaView style={styles.safe}>
                    
                    <View style={styles.generalContainer}>
                        <ScrollView>
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
                            <View style={styles.loginContainer}>
                                <View style={styles.inputView}>
                                    <View style={styles.left}>
                                        <Image 
                                        style={styles.logoTel}
                                        source={require('../assets/img/phone-2058848.png')}
                                        />
                                    </View>
                                    <View style={styles.right}>
                                        <TextInput
                                            style={styles.inputText}
                                            placeholder='Teléfono'
                                            maxLength={10}
                                            placeholderTextColor= 'rgb(162, 162, 162)'
                                            keyboardType={'number-pad'}
                                            autoCapitalize="none"
                                            value={enteredPhone}
                                            onChangeText={numberInputHandler}
                                        />
                                    </View>
                                </View>
                                <View style={styles.inputView}>
                                    <View style={styles.left}>
                                        <Image 
                                        style={styles.logoTel}
                                        source={require('../assets/img/user-30.png')}
                                        />
                                    </View>
                                    <View style={styles.right}>
                                        <TextInput
                                            style={styles.inputText}
                                            placeholder='Edad'
                                            placeholderTextColor= 'rgb(162, 162, 162)'
                                            keyboardType={'number-pad'}
                                            autoCapitalize="none"
                                            value={enteredAge}
                                            onChangeText={ageInputHandler}
                                            maxLength={2}
                                        />
                                    </View>
                                </View>
                                <View style={styles.inputView}>
                                    <View style={styles.left}>
                                        <Image 
                                        style={styles.logoTel}
                                        source={require('../assets/img/icon-lock-32.png')}
                                        />
                                    </View>
                                    <View style={styles.right}>
                                        <TextInput
                                            style={styles.inputText}
                                            placeholder='Nueva Contraseña' 
                                            placeholderTextColor= 'rgb(162, 162, 162)'
                                            secureTextEntry= {true}
                                            value={enteredPassword}
                                            onChangeText={setEnteredPassword}
                                            maxLength={25}
                                        />
                                    </View> 
                                </View>
                                <TouchableOpacity style={styles.loginBtn} onPress={(confirmInputHandler)}>
                                    <Text style={styles.loginText}>RESTABLECER CONTRASEÑA</Text>
                                </TouchableOpacity>
                                <View style={styles.registerText}>
                                    <Text style={styles.registerTextWithout}>Entre todos saldremos de esta situación</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>    
                </SafeAreaView>    
            </TouchableWithoutFeedback>
        )};


const styles = StyleSheet.create({
    safe: {
        backgroundColor: 'rgb(45, 45, 68)',
    },
    generalContainer:{
        width: '100%',
        height:'100%',
        backgroundColor: 'rgb(45, 45, 68)',
    },
    headerContainer: {
        backgroundColor: 'rgb(45, 45, 68)',
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    logo: {
        width: 260, 
        height: 160, 
        marginTop: Platform.select({
            ios: 20,
            android: 30
        }),
        padding: 10,
        paddingBottom: 0,
        resizeMode: 'contain'
    },
    tittle: {
        marginTop: 1,
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
    loginContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Montserrat-Medium',
      marginTop: Platform.select({
          ios: 30,
          android: 15
      })
    },
    inputView:{
        flexDirection: 'row',
        width:"80%",
        borderBottomColor: 'rgb(162, 162, 162)',
        borderBottomWidth: 1,
        marginBottom:10,
        justifyContent: 'flex-start',
        paddingLeft:15,
        alignItems: 'center',
      },
      inputText:{
        height:45,
        width:300,
        color:"white",
        justifyContent: 'center',
      },

      logoTel: {
        width: 30, 
        height: 20,  
        padding: 10,
        paddingBottom: 0,
        resizeMode: 'contain'
      },
      right: {
        paddingLeft: 10,
        alignSelf: 'flex-start',
      },

      forgot:{
        color: 'rgb(162, 162, 162)',
        fontSize:14,
        marginTop: 15,
        marginLeft: -15,
        width: '80%'
      },

      loginBtn:{
        width:"80%",
        backgroundColor: 'rgb(90, 204, 193)',
        borderRadius: 5,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
      loginText: {
        color: 'white'
      },
      registerText: {
          paddingTop: 15,
          fontSize: 13
      },
      registerTextWithout: {
        color: 'white',
        paddingBottom: Platform.select({
            ios: 70,
            android: 25
        }),
        marginTop: Platform.select({
            ios: 20,
            android: 10
        })

    },
    registerLink: {
        color: 'white'
    },
    checkbox: {
        width: 30, 
        height: 20,
        marginLeft: 100,
        paddingBottom: 0,
        resizeMode: 'contain'
    }
  },
);