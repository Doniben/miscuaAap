import React, { Component } from 'react';
import {
    View, Text, Image, StyleSheet, Button, TouchableOpacity, SafeAreaView, ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export function Login({ navigation }) {
    return (
	    <ScrollView>
	    	<SafeAreaView>
	    		<LinearGradient
					colors={['#0087EE', '#FFFFFF']}
					style={homeStyle.background}
	    		>
	    <View>
	    {/* Logo */}
	    <View style={logo.container}>
	    <TouchableOpacity>
	    <Image
	style={logo.img}
	source={require('../assets/Images/Home/Logo_Time.png')}
	    />
	    </TouchableOpacity>
	    </View>

	{/* Text */}
	    <View style={text.container}>
	    {/* Title */}
	    <View>
	    <Text style={text.title}>DAILYAPP</Text>
	    </View>
	    {/* Phrase of introduction */}
	    <View>
	    <Text style={text.paragraph}>
	    A different and entertaining method to improve your productivity
	</Text>
	    </View>
	    </View>

	{/* Login */}
	    <View style={login.container}>
	    {/* Image of the text login */}
	    <Image
	source={require('../assets/Images/Home/Login_Title.png')}
	style={login.textImg}
	    />

	{/* Buttons */}
	    <View style={login.buttons}>
	    {/* Button offline */}
	    <View>
	    <TouchableOpacity
	onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
	    >
	    <Image
	style={login.offline}
	source={require('../assets/Images/Home/Button_Offline.png')}
	    />
	    </TouchableOpacity>
	    </View>

	{/* Button Google */}
	    <View>
	    <TouchableOpacity
	onPress={() => navigation.navigate('LoginMiscua', {name: 'Jane'})}
	    >
	    <Image
	style={login.online}
	source={require('../assets/Images/Home/Button_Login.png')}
	    />
	    </TouchableOpacity>
	    </View>

	</View>
	    </View>

	</View>
	    </LinearGradient>
	    </SafeAreaView>
	    </ScrollView>
    )
}

const homeStyle = StyleSheet.create({
    background: {
	position: 'relative',
	left: 0,
	right: 0,
	top: 0,
	minHeight: 900
    }
})

const logo = StyleSheet.create({
    container: {
	alignItems: 'center'
    },
    img: {
	marginTop: 80,
	height: 180,
	width: 180,
	resizeMode: 'contain'
    }
})


const text = StyleSheet.create({
    container: {
	alignSelf: 'auto',
	alignItems: 'center',
	textAlign: 'center',
    },
    title: {
	marginTop: 30,
	marginBottom: 10,
	color: '#f7f6f5',
	fontSize: 40,
	fontWeight: 'bold',
	textAlign: 'center'
    },
    paragraph: {
	marginLeft: 30,
	marginRight: 40,
	marginTop: 30,
	color: '#f7f6f5',
	fontSize: 18,
	fontWeight: 'normal',
    }
})

const login = StyleSheet.create({
    container: {
	alignItems: 'center',
    },
    textImg: {
	flex: 2,
	marginTop: 60,
	height: '120%',
	width: '100%',
	resizeMode: 'contain',
	padding: 10,
    },
    buttons: {
	marginTop: 60,
    },
    offline: {
	height: 40,
	width: 180,
	marginBottom: 10,
	resizeMode: 'contain'
    },
    online: {
	height: 40,
	width: 180,
	resizeMode: 'contain',
    },
})

