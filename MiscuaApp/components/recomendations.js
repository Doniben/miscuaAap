import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
    Text,
    Image,
    StyleSheet,
    View,
    TouchableOpacity,
    Platform,
    SafeAreaView,
} from 'react-native';

export function recomendations ({ navigation, navigation: { goBack } }){
    return (
            <View style={styles.generalContainer}>
                <SafeAreaView style={styles.safe}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => {}}>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('atentionLines')}>
                            <Image style={styles.rightInfo} source={require('../assets/img/info.png')}/>  
                        </TouchableOpacity>
                    </View>
                    <View style={styles.titleContainer}>
                        <View style={styles.titleView}>
                        <Text style={styles.textTitleView}>RECUERDA SIEMPRE</Text>
                        </View>
                    </View>
                    <View style={styles.recomendationsBtn}>
                        <View>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.buttonleft}>
                            <View style={styles.boximg}>
                                <Image 
                                    style={styles.btnimgmask}
                                    source={require('../assets/img/mask.png')}/>
                            </View>
                             
                        </TouchableOpacity>   
                        <View style={styles.textBtn}><Text style={styles.textBtnformat}>USA SIEMPRE {'\n'}TAPABOCAS</Text></View> 
                        </View>                                         
                        <View>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.buttonleft}>
                            <View style={styles.boximg}>
                                <Image 
                                    style={styles.btnimghands}
                                    source={require('../assets/img/3x/hands.png')}/>
                            </View>
                             
                        </TouchableOpacity>   
                        <View style={styles.textBtn}><Text style={styles.textBtnformat}>LÁVATE LAS{'\n'}MANOS</Text></View> 
                        </View>                                           
                        <View>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.buttonleft}>
                            <View style={styles.boximg}>
                                <Image 
                                    style={styles.btnimghandShake}
                                    source={require('../assets/img/3x/handShake.png')}/>
                            </View>
                             
                        </TouchableOpacity>   
                        <View style={styles.textBtn}><Text style={styles.textBtnformat}>EVITA EL{'\n'}CONTACTO</Text></View> 
                        </View>                                             
                        <View>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.buttonleft}>
                            <View style={styles.boximg}>
                                <Image 
                                    style={styles.btnimghome}
                                    source={require('../assets/img/home.png')}/>
                            </View>
                             
                        </TouchableOpacity>   
                        <View style={styles.textBtn}><Text style={styles.textBtnformat}>QUÉDATE{'\n'}EN CASA</Text></View> 
                        </View>     
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => { navigation.navigate('gpsRequest') }}>
                            <LinearGradient style={styles.loginBtn}  colors={['rgb(90, 204, 193)',  'rgb(11, 191, 214)']}>
                                <Text style={styles.loginText}>HECHO</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
    )
};
const styles = StyleSheet.create({
    safe: {
        flex:1,
        backgroundColor: 'white',
    },
    generalContainer:{
        flex:6,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height:'12%',
        justifyContent: 'space-between',
        backgroundColor:'white',
    },
    leftNavigation: {
        width: 15,
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
    titleContainer:{
        height:'10%',
        alignItems:'center',
        justifyContent:'center'
    },
    titleView:{
        borderBottomColor:'rgb(51, 225, 237)',
        borderBottomWidth:3,
    },
    textTitleView:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    },
    
    recomendationsBtn: {
        height:'60%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        marginTop:10,
        paddingTop:Platform.select({
            ios:25,
        })
    },
    buttonleft: {
        width: Platform.select({
            ios:126,
            android:110,
        }),
        height: Platform.select({
            ios:126,
            android:110,
        }),
        backgroundColor:'rgb(45, 45, 68)',
        borderRadius:100,
        alignSelf:'center',
        justifyContent:'center',
        marginBottom:2,
        marginRight:25,
        marginLeft:25,
    },
    btnimgmask:{
        width: Platform.select({
            ios: 91,
            android: 88
        }),
        height: Platform.select({
            ios:58,
            android:55,
        }),
        alignSelf:'center',
        justifyContent:'center'
    },
    btnimghands:{
        width: Platform.select({
            ios: 85,
            android:80
        }),
        height: Platform.select({
            ios:85,
            android:79,
        }),
        alignSelf:'center',
        justifyContent:'center'
    },
    btnimghandShake:{
        width: Platform.select({
            ios: 115,
            android:100
        }),
        height: Platform.select({
            ios:65,
            android:50,
        }),
        alignSelf:'center',
        justifyContent:'center'
    },
    btnimghome:{
        width:70,
        height:68,
        width: Platform.select({
            ios: 70,
            android:70
        }),
        height: Platform.select({
            ios:68,
            android:70,
        }),
        alignSelf:'center',
        justifyContent:'center'
    },
    textBtn:{
        alignSelf:'center',
        alignItems:'center',    
        marginBottom:30,
    },
    textBtnformat:{
        fontSize:16,
        textAlign:'center',
        fontWeight:'bold',
    },      
    footer:{
        height:'15%',
        backgroundColor:'white',
        justifyContent:'center',
    },
    loginBtn:{
        width:"90%",
        borderRadius: 5,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        alignSelf: 'center'
      },
      loginText: {
        color: 'white',
        fontWeight:'bold',
      },
})