
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
    ScrollView,
    Keyboard,
    TouchableWithoutFeedback,
    Alert,
    Button,
} from 'react-native';

export function LoginMiscua({ navigation }){
   
    const [enteredPhone, setEnteredPhone] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    //function that just allow numbers in the Numberphone input
    const numberInputHandler = inputText => {
        setEnteredPhone(inputText.replace(/[^0-9]/g, ''));
    };
    //Function for validate the input
    const confirmInputHandler = () => {
        const confirmedPhone = enteredPhone;
        if (confirmedPhone === '' || confirmedPhone.length < 10 || confirmedPhone[0] !== '3'){
            Alert.alert('Ups','Ingresa un número válido')
            }
        else{
           const confirmedPhone = parseInt(enteredPhone);
            if (confirmedPhone < 0 || confirmedPhone === NaN){
                Alert.alert('Ups!','Número inválido')
                }
            const confirmedPassword = enteredPassword;
            if (confirmedPassword.length === 0 || confirmedPassword.length < 4){
                Alert.alert('Ups!','Revisa tu contraseña')}
                else{
                    const user = {
                        phone: '',
                        password: ''
                        }
                    user['password'] = confirmedPassword;
                    user['phone'] = confirmedPhone;
                    console.log('Número correcto', user)
                    setEnteredPhone('');
                    setEnteredPassword('');
                    Alert.alert('Por favor espera','Estamos Validando tus datos...')}
                }
        }         
    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}>
            <SafeAreaView style={styles.safe}>
            <View style={styles.generalContainer}>
            <ScrollView>
                    <View style={styles.headerContainer}>
                        <View>
                            <Image style={styles.logo} source={require('../assets/img/01.png')}/>
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
                                    placeholderTextColor= 'rgb(162, 162, 162)'
                                    maxLength={10}
                                    keyboardType={'number-pad'}
                                    autoCapitalize="none"
                                    blurOnSubmit
                                    onChangeText={numberInputHandler}
                                    value={enteredPhone}
                                    
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
                                    onChangeText={setEnteredPassword}
                                    value={enteredPassword}
                                />
                            </View> 
                        </View>
                        <TouchableOpacity  style={styles.loginBtn} onPress={(confirmInputHandler)}>
                            <Text style={styles.loginText} >
                                INGRESA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.forgot}>Olvidé mi contraseña</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.registerText} onPress={() => navigation.navigate('register')}>
                            <Text><Text style={styles.registerTextWithout}>No tengo cuenta,  </Text><Text style={styles.registerLink}>REGISTRARME</Text></Text>
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
    generalContainer: {
        backgroundColor: 'rgb(45, 45, 68)',
        width:'100%',
        height:'100%',
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
            ios: 50,
            android: 30
        }),
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

    loginContainer: {
        height: '50%',
        alignItems: 'center',
        fontFamily: 'Montserrat-Medium',
        backgroundColor: 'rgb(45, 45, 68)',
        marginTop: Platform.select({
          ios: 50,
          android: 60
      })
    },
    inputView:{
        flexDirection: 'row',
        width:"80%",
        height:30,
        borderBottomColor: 'rgb(162, 162, 162)',
        borderBottomWidth: 1,
        marginBottom:20,
        paddingLeft:15,
        alignItems: 'center',
        marginLeft:9,
        marginBottom:10,
      },
      inputText:{
        height:70,
        width:300,
        color:"white",
        justifyContent: 'center',
      },

      logoTel: {
        width: 30, 
        height: 20,  
        padding: 0,
        paddingBottom: 0,
        resizeMode: 'contain',
        justifyContent:'center',
      },
      right: {
        paddingLeft: 10,
        justifyContent:'center',
        marginTop:30,
      },
      left: {
        justifyContent:'center',
      },
      forgot:{
        color: 'rgb(162, 162, 162)',
        fontSize:14,
        borderBottomColor: 'rgb(162, 162, 162)',
        borderBottomWidth: 1,
        marginTop: 15,
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
        color: 'rgb(162, 162, 162)'
    },
    registerLink: {
        color: 'white'
    }
  },
);