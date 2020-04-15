import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements';

import {
    Text,
    Image,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Platform
} from 'react-native';

export default class Register extends Component {
    state={
        Telefono:"",
        edad:"",
        Contraseña:""
    }
    render() {
        return (
            <View style={styles.loginContainer}>
                <View style={styles.inputView}>
                    <View style={styles.left}>
                        <Image 
                        style={styles.logoTel}
                        source={require('../../assets/img/phone-2058848.png')}
                        />
                    </View>
                    <View style={styles.right}>
                        <TextInput
                            style={styles.inputText}
                            placeholder='Teléfono'
                            placeholderTextColor= 'rgb(162, 162, 162)'
                            value={this.state.mobileNumber}
                            returnKeyType={'next'}
                            keyboardType={'phone-pad'}
                            onChangeText={(mobileNumber) => this.setState({mobileNumber})}
                            maxLength={10}
                        />
                    </View>
                </View>
                <View style={styles.inputView}>
                    <View style={styles.left}>
                        <Image 
                        style={styles.logoTel}
                        source={require('../../assets/img/user-30.png')}
                        />
                    </View>
                    <View style={styles.right}>
                        <TextInput
                            style={styles.inputText}
                            placeholder='Edad'
                            placeholderTextColor= 'rgb(162, 162, 162)'
                            keyboardType = 'numeric'
                            onChangeText = {(text) => this.setState({Edad: text})}
                            value = {this.state.myNumber}
                            maxLength={2}
                        />
                    </View>
                </View>
                <View style={styles.inputView}>
                    <View style={styles.left}>
                        <Image 
                        style={styles.logoTel}
                        source={require('../../assets/img/icon-lock-32.png')}
                        />
                    </View>
                    <View style={styles.right}>
                        <TextInput
                            style={styles.inputText}
                            placeholder='Contraseña' 
                            placeholderTextColor= 'rgb(162, 162, 162)'
                            secureTextEntry= {true}
                            onChangeText = {(text) => this.setState({password: text})}/>
                    </View> 
                </View>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>REGÍSTRATE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', width: '80%'}}>
                    <CheckBox
                        checkedIcon={<Image style={styles.checkbox} source={require('../../assets/img/checked-checkbox-50.png')} />}
                        uncheckedIcon={<Image style={styles.checkbox} source={require('../../assets/img/unchecked-checkbox-50.png')} />}
                        checked={this.state.checked}
                        onPress={() => this.setState({checked: !this.state.checked})}/>
                    <Text style={styles.forgot}>Acepto términos y condiciones</Text>
                </TouchableOpacity>
                <View style={styles.registerText}>
                    <Text style={styles.registerTextWithout}>Entre todos saldremos de esta situación</Text>
                </View>
            </View>
        )};
    }


const styles = StyleSheet.create({
    loginContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Montserrat-Medium',
      marginTop: Platform.select({
          ios: 120,
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
        height:50,
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