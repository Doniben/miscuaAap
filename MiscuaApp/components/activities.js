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
    Alert,
} from 'react-native';

export function activities ({ navigation }){
    const [statusPress1, setStatuspress1] = useState(false);
    const [statusPress2, setStatuspress2] = useState(false);
    const [statusPress3, setStatuspress3] = useState(false);
    const [statusPress4, setStatuspress4] = useState(false);
    const [statusPress5, setStatuspress5] = useState(false);
    const [statusPress6, setStatuspress6] = useState(false);
    const [listActivities,setlistActivities] = useState([]);
    
    const sendData = () =>{
        if (listActivities[0] === undefined){
            Alert.alert('Ups', 'Por favor indica el motivo de tu salida.');
        }
        else {
            navigation.reset({
                index: 0,
                routes: [{ name: 'recomendations' }],});
            console.log(listActivities);
            }
    }
    const addActivity1 = (a) => {
        statusPress1 ? listActivities.splice( listActivities.indexOf(a), 1 ) : listActivities.push(a)
    }
    const addActivity2 = (a) => {
        statusPress2 ? listActivities.splice( listActivities.indexOf(a), 1 ) : listActivities.push(a)
    }
    const addActivity3 = (a) => {
        statusPress3 ? listActivities.splice( listActivities.indexOf(a), 1 ) : listActivities.push(a)
    }
    const addActivity4 = (a) => {
        statusPress4 ? listActivities.splice( listActivities.indexOf(a), 1 ) : listActivities.push(a)
    }
    const addActivity5 = (a) => {
        statusPress5 ? listActivities.splice( listActivities.indexOf(a), 1 ) : listActivities.push(a)
    }
    const addActivity6 = (a) => {
        statusPress6 ? listActivities.splice( listActivities.indexOf(a), 1 ) : listActivities.push(a)
    }

    const changeStatus1 = () => {
        statusPress1 ? setStatuspress1(false): setStatuspress1(true);
    }
    const changeStatus2 = () => {
        statusPress2 ? setStatuspress2(false): setStatuspress2(true);
    }
    const changeStatus3 = () => {
        statusPress3 ? setStatuspress3(false): setStatuspress3(true);
    }
    const changeStatus4 = () => {
        statusPress4 ? setStatuspress4(false): setStatuspress4(true);
    }
    const changeStatus5 = () => {
        statusPress5 ? setStatuspress5(false): setStatuspress5(true);
    }
    const changeStatus6 = () => {
        statusPress6 ? setStatuspress6(false): setStatuspress6(true);
    }
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
                    <Text style={styles.titleView}>SELECCIONA EL MOTIVO{'\n'} DE TU SALIDA</Text>
                </View>
                <View style={styles.recomendationsBtn}>
                    <View style={styles.columnLeft}>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={ 
                                statusPress1 ?  styles.buttonleftp : styles.buttonleft
                            }
                            onPress={()=>{
                                changeStatus1();
                                addActivity1(1);
                            }}>
                            <Image 
                                style={styles.btnimgheadeache}
                                source={require('../assets/img/groceries.png')}
                                />     
                        <LinearGradient
                            style={styles.textBtn}  
                            colors={['rgb(90, 204, 193)',  'rgb(11, 191, 214)']}
                        >
                          <Text style={styles.textBtnformat}>Compra de{'\n'}víveres</Text>
                        </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={ 
                                statusPress3 ?  styles.buttonleftp : styles.buttonleft
                            }
                            onPress={()=>{
                                changeStatus3();
                                addActivity3(3);
                            }}>
                            <Image 
                                style={styles.btnimgheadeache}
                                source={require('../assets/img/debit-card.png')}
                                />
                        <LinearGradient
                            style={styles.textBtn}  
                            colors={['rgb(90, 204, 193)',  'rgb(11, 191, 214)']}
                        >
                          <Text style={styles.textBtnformat}>Diligencias{'\n'}bancarias</Text>
                        </LinearGradient>            
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={ 
                                statusPress5 ?  styles.buttonleftp : styles.buttonleft
                            }
                            onPress={()=>{
                                changeStatus5();
                                addActivity5(5);
                            }}>
                            <Image 
                                style={styles.btnimgheadeache}
                                source={require('../assets/img/dog.png')}
                                />
                        <LinearGradient
                            style={styles.textBtn}  
                            colors={['rgb(90, 204, 193)',  'rgb(11, 191, 214)']}
                        >
                        <Text style={styles.textBtnformat}>Paseo a{'\n'}máscota</Text>
                        </LinearGradient>            
                        </TouchableOpacity>
                    </View>
                    <View style={styles.columnRight}>
                    <TouchableOpacity
                            activeOpacity={1}
                            style={ 
                                statusPress2 ?  styles.buttonleftp : styles.buttonleft
                            }
                            onPress={()=>{
                                changeStatus2();
                                addActivity2(2);
                            }}>
                            <Image 
                                style={styles.btnimgheadeache}
                                source={require('../assets/img/doctor.png')}
                                />
                        <LinearGradient
                            style={styles.textBtn}  
                            colors={['rgb(90, 204, 193)',  'rgb(11, 191, 214)']}
                        >
                        <Text style={styles.textBtnformat}>Visita{'\n'}médica</Text>
                        </LinearGradient>            
                        </TouchableOpacity>                     
                        <TouchableOpacity
                            activeOpacity={1}
                            style={ 
                                statusPress4 ?  styles.buttonleftp : styles.buttonleft
                            }
                            onPress={()=>{
                                changeStatus4();
                                addActivity4(4);
                            }}>
                            <Image 
                                style={styles.btnimgheadeache}
                                source={require('../assets/img/work.png')}
                                />
                        <LinearGradient
                            style={styles.textBtn}  
                            colors={['rgb(90, 204, 193)',  'rgb(11, 191, 214)']}
                        >
                        <Text style={styles.textBtnformat}>Trabajo</Text>
                        </LinearGradient>
                        </TouchableOpacity>                                 
                        <TouchableOpacity
                            activeOpacity={1}
                            style={ 
                                statusPress6 ?  styles.buttonleftp : styles.buttonleft
                            }
                            onPress={()=>{
                                changeStatus6();
                                addActivity6(6);
                            }}>
                            <Image 
                                style={styles.btnimgheadeache}
                                source={require('../assets/img/family.png')}
                            />
                        <LinearGradient
                            style={styles.textBtn}  
                            colors={['rgb(90, 204, 193)',  'rgb(11, 191, 214)']}
                        >
                            <Text style={styles.textBtnformat}>Visita{'\n'}familiar</Text>
                        </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footer}>
                <TouchableOpacity style={styles.loginBtn} onPress={()=>{sendData()}}>
                    <LinearGradient
                        style={styles.loginBtn}  
                        colors={['rgb(90, 204, 193)',  'rgb(11, 191, 214)']}
                    >
                        <Text style={styles.loginText}>OK</Text>
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
        alignSelf:'flex-start',
        marginLeft:30,
        marginTop:30,

    },
    rightInfo: {
        width: 30,
        height: 30,
        marginRight: 30,
        marginTop: 30,
        alignSelf:'flex-end',
    },
    titleContainer:{
        width:'70%',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        marginBottom:25,
    },
    titleView:{
        width:'100%',
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
    },
    subtitleContainer:{
        width:'70%',
        height:40,
        alignSelf:'center',
        justifyContent:'center',
    },
    subtitletxt:{
        textAlign:'center',
        fontWeight:'bold',
        color:'rgb(112, 112, 112)',
        fontSize:16,
    },
    recomendationsBtn: {
        width:'90%',
        height:'60%',
        alignSelf:'center',
        marginBottom:5,
        alignContent:'flex-start'
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
            ios:'70%',
            android:'70%'
        }),
        height: Platform.select({
            ios:'30%',
            android:'30%',
        }),
        borderRadius:25,
        alignSelf:'center',
        marginBottom:10,
        overflow:'hidden',
        paddingTop:6
    },
    buttonleftp: {
        width: Platform.select({
            ios:'70%',
            android:'70%'
        }),
        height: Platform.select({
            ios:'30%',
            android:'30%',
        }),
        borderRadius:25,
        borderColor:'rgb(79, 204, 214)',
        borderWidth:3,
        alignSelf:'center',
        marginBottom:10,
        overflow:'hidden',
        paddingTop:3,
    },
    buttonright: {
        width: Platform.select({
            ios:'75%',
            android:'43%'
        }),
        height: Platform.select({
            ios:'32%',
            android:'19%',
        }),
        borderRadius:25,
        borderWidth:3,
        alignSelf:'center',
        justifyContent:'flex-start',
        marginBottom:30,
        overflow:'hidden',
    },
    textBtn:{
        width:'100%',
        height: Platform.select({
            ios: '34%',
            android: '40%',
        }),
        alignSelf:'center',
        borderRadius: 2,
        marginTop:Platform.select({
            ios:'67%',
            android:'60%',
        }),
        position:'absolute',
        justifyContent:'center'
    },
    textBtnformat:{
        fontSize:14,
        textAlign:'center',
        color:'white',
    },  
    btnimgheadeache:{
        width: Platform.select({
            ios: 65,
            android:55
        }),
        height: Platform.select({
            ios:65,
            android:55,
        }),
        alignSelf:'center',
    },    
    footer:{
        backgroundColor:'white',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
    },
    loginBtn:{
        width:"60%",
        borderRadius: 15,
        height:35,
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
        justifyContent:'center',
      },
      creatorsimg:{
        width:33,
        height:40,
        marginRight:15,
    }
})