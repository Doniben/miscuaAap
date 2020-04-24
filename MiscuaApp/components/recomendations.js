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

export function recomendations ({ navigation }){
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.generalContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('main')}>
                        <Image style={styles.leftNavigation} source={require('../assets/img/back-50.png')}/>  
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('atentionLines')}>
                        <Image style={styles.rightInfo} source={require('../assets/img/info.png')}/>  
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleView}>RECUERDA SIEMPRE</Text>
                </View>
                <View style={styles.recomendationsBtn}>
                    <View style={styles.columnLeft}>
                        <View style={styles.buttonleft}>
                            <Image 
                                style={styles.btnimgmask}
                                source={require('../assets/img/mask.png')}
                            />
                        </View>
                        <View style={styles.textBtn}><Text style={styles.textBtnformat}>USA SIEMPRE {'\n'}TAPABOCAS</Text></View>            
                        <View style={styles.buttonleft}>
                            <Image 
                                style={styles.btnimghandShake}
                                source={require('../assets/img/3x/handShake.png')}
                            />
                        </View>
                        <View style={styles.textBtn}><Text style={styles.textBtnformat}>EVITA EL {'\n'} CONTACTO</Text></View>                        
                    </View>
                    <View style={styles.columnRight}>
                        <View style={styles.buttonleft}>
                            <Image 
                                style={styles.btnimghands}
                                source={require('../assets/img/3x/hands.png')}
                            />
                        </View>
                        <View style={styles.textBtn}>
                            <Text style={styles.textBtnformat}>LÁVATE LAS {'\n'} MANOS</Text>
                        </View>                                            
                        <View style={styles.buttonleft}>
                            <Image 
                                style={styles.btnimghome}
                                source={require('../assets/img/home.png')}
                            />
                        </View>
                        <View style={styles.textBtn}><Text style={styles.textBtnformat}>QUÉDATE {'\n'} EN CASA</Text></View>                                
                    </View>
                </View>
                <View style={styles.footer}>
                <TouchableOpacity style={styles.loginBtn} onPress={() => { navigation.navigate('gpsRequest') }}>
                    <LinearGradient style={styles.loginBtn}  colors={['rgb(90, 204, 193)',  'rgb(11, 191, 214)']}>
                        <Text style={styles.loginText}>HECHO</Text>
                    </LinearGradient>
                </TouchableOpacity>
                </View>
                <View style={styles.buttonBot}><Image style={styles.creatorsimg} source={require('../assets/img/logo.png')}/></View>
            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    safe: {
        backgroundColor: 'white',
    },
    generalContainer:{
        width: '100%',
        height: '100%',
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
        width:'55%',
        height:25,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        borderBottomColor:'rgb(51, 225, 237)',
        borderBottomWidth:3,
        marginBottom:30,
    },
    titleView:{
        width:'100%',
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
    },
    recomendationsBtn: {
        width:'90%',
        height:'60%',
        alignSelf:'center',
        marginBottom:10,
        justifyContent:'center',

    },
    columnLeft:{
        width:'50%',
        height:'100%',
        alignSelf:'flex-start',
    },
    columnRight:{
        width:'50%',
        height:'100%',
        alignSelf:'flex-end',
        position:'absolute',
    },
    buttonleft: {
        width: Platform.select({
            ios:'68%',
            android:'65%'
        }),
        height: Platform.select({
            ios:'29%',
            android:'29%',
        }),
        backgroundColor:'rgb(45, 45, 68)',
        borderRadius:80,
        alignSelf:'center',
        justifyContent:'center',
        marginBottom:10,
        position:'relative',
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
        position:'absolute',
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
        position:'absolute',
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
        position:'absolute',
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
        position:'absolute',
        alignSelf:'center',
        justifyContent:'center'
    },
    buttonright: {
        width: '70%',
        height: '30%',
        borderRadius: 80,
        backgroundColor:'rgb(45, 45, 68)',
        alignSelf:'center',
        marginBottom:15,
    },
    textBtn:{
        width:'100%',
        height:'10%',
        alignSelf:'center',
        alignItems:'center',
        marginBottom:40,        
    },
    textBtnformat:{
        fontSize:16,
        textAlign:'center',
        fontWeight:'bold',
    },      
    footer:{
        backgroundColor:'white',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
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
      buttonBot:{
        width:'100%',
        height:'09%',
        alignItems:'flex-end',
        justifyContent:'center'
      },
      creatorsimg:{
          width:33,
          height:40,
          marginRight:15,
      }

})