import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    TouchableOpacity,
    ScrollView
} from 'react-native';


export function Activities({navigation}) {
    return (
	    <ScrollView>
	    <View style={header.background}>
	    {/* Header */}
	    <View style={header.header}>
	    <TouchableOpacity
	onPress={() => navigation.navigate('Home')}
	    >
	    <Image
	style={header.logomin}
	source={require('../assets/Images/Profile/Time.png')}
	    />
	    </TouchableOpacity>
	    <Text style={header.textheader}>Activities</Text>
	    </View>

	{/* Score */}
	    <View style={myScore.container}>
	    <Image
	style={myScore.podium}
	source={require('../assets/Images/Profile/podium.png')}
	    />
	    <View style={myScore.paragraph}>
	    <Text style={myScore.points}>Best Score: 0</Text>
	    <Text style={myScore.points}>Your Score: 0</Text>
	    </View>
	    </View>

	{/* Goals */}
	    <View>
	    <Text style={myGoals.text}>Goals</Text>
	    <View style={myGoals.background}>
	    <View style={myGoals.container}>
	    <TouchableOpacity
	onPress={() => navigation.navigate('Activity', {activity: 'Make my bed'})}
	    >
	    <Image
	style={myGoals.firstactivity}
	source={require('../assets/Images/Profile/Bed.png')}
	    />
	    </TouchableOpacity>

	    <TouchableOpacity
	onPress={() => navigation.navigate('Activity', {activity: 'Take a shower'})}
	    >
	    <Image
	style={myGoals.firstactivity}
	source={require('../assets/Images/Profile/Shower.png')}
	    />
	    </TouchableOpacity>
	    </View>

	    <TouchableOpacity
	onPress={() => navigation.navigate('Activity', {activity: 'Dance'})}
	    >
	    <Image
	style={myGoals.secondactivity}
	source={require('../assets/Images/Profile/Dance.png')}
	    />
	    </TouchableOpacity>
	    </View>
	    </View>

	{/* Faq */}
	    <View style={footer.container}>
	    <TouchableOpacity
	onPress={() => navigation.navigate('Faq')}
	    >
	    <Image
	style={footer.image}
	source={require('../assets/Images/Profile/question.png')}
	    />
	    </TouchableOpacity>
	    </View>

	</View>
	    </ScrollView>
    );
}

const header = StyleSheet.create({
    background: {
	backgroundColor: '#FFFFFF'
    },
    header: {
	flexDirection: 'row',
	marginTop: 10
    },
    logomin: {
	marginTop: 32,
	marginLeft: 20,
	marginRight: 10,
	marginBottom: 10,
	height: 60,
	width: 60,
	resizeMode: 'cover'
    },
    textheader: {
	marginTop: 26,
	marginLeft: 10,
	marginRight: 20,
	marginBottom: 10,
	fontSize: 38,
	textAlign: 'center',
	textAlignVertical: 'center'
    }
});

const myScore = StyleSheet.create({
    container: {
	flexDirection: 'row',
	alignItems: 'center',
    },
    podium: {
	marginTop: 40,
	marginLeft: 30,
	marginRight: 20,
	height: 150,
	width: 150,
	resizeMode: 'cover'
    },
    paragraph: {
	flexDirection: 'column'
    },
    points: {
	marginTop: 36,
	marginLeft: 20,
	textAlign: 'center',
	textAlignVertical: 'center',
	fontSize: 16
    }
});

const myGoals = StyleSheet.create({
    background: {
	alignItems: 'center',
	justifyContent: 'center'
    },
    container: {
	flexDirection: 'row',
    },
    text: {
	marginTop: 20,
	marginLeft: 20,
	marginBottom: 20,
	fontSize: 30
    },
    firstactivity: {
	marginTop: 20,
	marginRight: 20,
	height: 125,
	width: 125,
	resizeMode: 'cover'
    },
    secondactivity: {
	marginTop: 30,
	marginRight: 20,
	height: 125,
	width: 125,
	resizeMode: 'cover'
    }
});


const footer = StyleSheet.create({
    container: {
	marginTop: 15,
	marginBottom: 15,
	marginLeft: 30
    },
    image: {
	height: 30,
	width: 30,
	resizeMode: 'cover'
    }
});
