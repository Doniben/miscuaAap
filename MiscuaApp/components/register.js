import React, { useState, useCallback } from 'react';
import { CheckBox } from 'react-native-elements';
import axios from 'axios'

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
    Keyboard,
    Linking,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

export function register({ navigation, navigation: { goBack } }){
    const [enteredPhone, setEnteredPhone] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [checked, setChecked] = useState(false);
    
    const url = "https://miscua.com/terminos-y-condiciones.html";

    const terms = useCallback(async () => {
            await Linking.openURL(url);
        }, [url]);
      
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
                        if (checked === true){
                        const user = {
                            phone: '',
                            password: '',
                            age: ''
                            }
                        user['password'] = confirmedPassword;
                        user['phone'] = confirmedPhone;
                        user['age'] = confirmedAge;
                        const HOST = 'https://covid19.ieliot.com/' 
                        const TOKEN = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGkiOiI1ZTdiNDc5NmY1YmQ3NGM0MTYyZWRmMWUiLCJkZXYiOiI1ZTdiYzUwNzY1YjZkNjVhNTBmYjI3NmMiLCJleHAiOjE2NDg1NjYzMjAsIm5iZiI6MTU4NTQ5NDMyMCwicHJvIjoiY292aWQxOSIsInNjcCI6MH0.WjIzXecfpB6ZNWPaV6NAJJUHF0v3g1UigQKQSc4rSizh11_OiP8zszdxLNNIN5WeSzwId0pyJ8Z5aVDuyf-I3Q9BBHTkSh2Rx7T_ssa3OB1xUpvSYsrNMN3sI8peVIsJfedXgbfnGBlrJBCQR4sHPXuugWqkPe5P1do-LhMTeJ5iF11JCtMp1Dvc43fXc8bBoU9eX5Pdxwz-c2Vspg0EJN1Xcm8vIogmtMB8Ro--rZrIRhW3TAMOARJk-jcwINsx47QwVi2XRsVAmGWl0TRrTohuVl9xvqoxhO8PYOiss9L6LZ60tP22v8IOoINXoxYlMh_W9TRSj1HJYiLF7onPnBqDfd37wKG7FoO4UkTcXECV09uwIQFJuv_9URI1zrHWWJWmxq49rDvKaFkbKXkIfInAxnjI0WEHmJxpqcIT_x79ZV7rfR5_H2JM8B4um0HpnaBdgwWDt8Zn7o6WoWjrZCbXHs4abUvafkX-lsi8XXHSCmmdPAh7lx5h3QKF1rGWR5ScyfI-O8rOI_D1bu4H_QLE6ME88gjTr6XTpSnLofQaKZZu0TiAHkpEfl_SUXXlyfjSfutkuyr0sdwMbJaXzSlNQ45Uhy2mwF18l0MkHYEiOaz88-xZ3Qi3LnOozh9tGiPiXqfaMM8Pz4wGnlkgRFMYyjYnI-X9Zz_OB4wz65c'

                        var postData = {
                            'password': user.password,
                            "data": {
                                "phone": user.phone,
                                "age": user.age
                            }
                        };
                        let axiosConfig = {
                            headers: {
                                'Authorization': `${TOKEN}`,
                                'Content-Type': 'application/json'
                                }
                        };
                        axios.post( `${HOST}` + 'rest/v1/device/', postData, axiosConfig)
                          .then(function (response) {
                            if (response.data.err === undefined)
                                {
                                    console.log('USUARIO NUEVO REGISTRADO!')
                                    Alert.alert('Registro exitoso!','Ya puedes iniciar sesión')
                                    navigation.reset({
                                        index: 0,
                                        routes: [{ name: 'LoginMiscua' }],
                                      });
                                }
                            else if (response.data.err[110] === 'd' && response.data.err[111] === 'u')
                            {
                                console.log('USUARIO YA EXISTE')
                                Alert.alert('Error!','Este usuario ya está registrado')
                                setEnteredPhone('');
                                setEnteredAge('');
                                setEnteredPassword('');
                                setChecked(false);
                            }
                            else
                            {
                                console.log('Error desconocido')
                                Alert.alert('Error desconocido')
                            }
                            console.log('====================')
                            console.log('====================')
                            console.log('====================')
                            //navigation.navigate('login');
                          })
                          .catch(function (error) {
                            console.log(error);
                          });
                   
                    //    Alert.alert('Registro exitoso!','Ya puedes iniciar sesión')
                        //navigation.navigate('login')
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
                                        maxLength={25}
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
                                <Text style={styles.forgot}>Acepto <Text style={styles.link} onPress={terms} >términos y condiciones</Text></Text>
                            </TouchableOpacity>
                            <View style={styles.registerText}>
                                <Text style={styles.registerTextWithout}>Entre todos saldremos de esta situación</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.backLogin} onPress={()=> navigation.navigate('LoginMiscua')}>Regresar</Text>
                            </TouchableOpacity>
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
            android: 15,
        }),
        padding: 10,
        paddingBottom: 0,
        resizeMode: 'contain'
    },
    loginContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: Platform.select({
          ios: 10,
          android: 0
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
      loginBtn:{
        width:"80%",
        backgroundColor: 'rgb(90, 204, 193)',
        borderRadius: 5,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30,
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
    },
    forgot:{
        color: 'rgb(162, 162, 162)',
        fontSize:14,
        marginTop: 15,
        marginLeft: -15,
        width: '80%'
      },
    link:{
        textDecorationLine:'underline',
    },
    backLogin:{
        marginTop:20,
        color: 'rgb(162, 162, 162)',
        fontSize:14,
        width: '80%',
        textDecorationLine:'underline',
      },
});