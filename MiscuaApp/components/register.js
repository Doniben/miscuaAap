import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';

import {
    Text,
    Image,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    SafeAreaView,
    Alert,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export function register({ navigation }){
    const [enteredPhone, setEnteredPhone] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [checked, setChecked] = useState(false);
    
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
                if (confirmedPassword.length === 0 || confirmedPassword.length < 4){
                    Alert.alert('Ups!','Revisa tu contraseña')}
                    else{
                        if (checked === true){
                        const user = {
                            phone: '',
                            password: '',
                            age: ''
                            }
                        user['password'] = confirmedPassword;
                        user['phone'] = confirmedPhone;
                        user['age'] = confirmedAge;
                        console.log('Número correcto', user)
                        setEnteredPhone('');
                        setEnteredAge('');
                        setEnteredPassword('');
                        Alert.alert('Por favor espera','Estamos Validando tus datos...')
                    }
                    else{
                        Alert.alert('Ups', 'Acepta los términos y condiciones')
                    }
                    }
                    }
                }
        }         
    const changeCheck = () => {
        if (checked === false){
            setChecked(true);
        }
        else{
            setChecked(false);
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
                                    <Image style={styles.logo} source={require('../assets/img/01.png')}/>
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
                                            placeholderTextColor= 'rgb(162, 162, 162)'
                                            keyboardType={'number-pad'}
                                            autoCapitalize="none"
                                            value={enteredPhone}
                                            onChangeText={numberInputHandler}
                                            maxLength={10}
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
                                        placeholder='Contraseña' 
                                        placeholderTextColor= 'rgb(162, 162, 162)'
                                        secureTextEntry= {true}
                                        value={enteredPassword}
                                        onChangeText={setEnteredPassword}
                                    />
                                </View> 
                            </View>
                            <TouchableOpacity style={styles.loginBtn} onPress={(confirmInputHandler)}>
                                <Text style={styles.loginText}>REGÍSTRATE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', width: '80%'}}>
                                <CheckBox
                                checkedIcon={<Image style={styles.checkbox} source={require('../assets/img/checked-checkbox-50.png')} />}
                                uncheckedIcon={<Image style={styles.checkbox} source={require('../assets/img/unchecked-checkbox-50.png')} />}
                                checked={checked}
                                onPress={(changeCheck)}
                                />
                                <Text style={styles.forgot}>Acepto términos y condiciones</Text>
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
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 20,
        backgroundColor: 'rgb(45, 45, 68)',
        marginBottom: 0,
    },
    logo: {
        width: 260, 
        height: 160, 
        marginTop: Platform.select({
            ios: 5,
            android: 30
        }),
        padding: 10,
        paddingBottom: 0,
        resizeMode: 'contain'
    },
    loginContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Montserrat-Medium',
      marginTop: Platform.select({
          ios: 10,
          android: 10
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
        marginTop: Platform.select({
            ios: 0,
            android: -10
        })

    },
    registerLink: {
        color: 'white'
    },
    checkbox: {
        width: 30, 
        height: 20,
        marginLeft: 20,
        paddingBottom: 0,
        resizeMode: 'contain'
    }
  },
);