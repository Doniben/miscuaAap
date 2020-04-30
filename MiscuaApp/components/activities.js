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
            console.log(listActivities);
            navigation.reset({
                index: 0,
                routes: [{ name: 'recomendations' }],
            });
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
            <View style={styles.generalContainer}>
                <SafeAreaView>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => {navigation.reset({
                                                                            index: 0,
                                                                            routes: [{ name: 'main' }],
                                                                        });}}>
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
                            <TouchableOpacity
                                activeOpacity={1}
                                style={ 
                                    statusPress1 ?  styles.buttonleftp : styles.buttonleft
                                }
                                onPress={()=>{
                                    changeStatus1();
                                    addActivity1(1);
                                }}>
                                <View style={styles.boximg}>
                                    <Image 
                                        style={styles.btnimgheadeache}
                                        source={require('../assets/img/groceries.png')}
                                        />
                                </View>     
                                <LinearGradient
                                    style={styles.textBtn}  
                                    colors={['rgb(51, 225, 237)', 'rgb(51, 225, 237)']}
                                >
                                    <Text style={styles.textBtnformat}>Compra de{'\n'}víveres</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={ 
                                    statusPress2 ?  styles.buttonleftp : styles.buttonleft
                                }
                                onPress={()=>{
                                    changeStatus2();
                                    addActivity2(2);
                                }}>
                                <View style={styles.boximg}>
                                    <Image 
                                        style={styles.btnimgheadeache}
                                        source={require('../assets/img/doctor.png')}
                                    />
                                </View>
                                <LinearGradient
                                    style={styles.textBtn}  
                                    colors={['rgb(51, 225, 237)', 'rgb(51, 225, 237)']}
                                >
                                    <Text style={styles.textBtnformat}>Visita{'\n'}médica</Text>
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
                                <View style={styles.boximg}>
                                    <Image 
                                        style={styles.btnimgheadeache}
                                        source={require('../assets/img/debit-card.png')}
                                    />
                                </View>
                                <LinearGradient
                                    style={styles.textBtn}  
                                    colors={['rgb(51, 225, 237)', 'rgb(51, 225, 237)']}
                                >
                                    <Text style={styles.textBtnformat}>Diligencias{'\n'}bancarias</Text>
                                </LinearGradient>            
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={ 
                                    statusPress4 ?  styles.buttonleftp : styles.buttonleft
                                }
                                onPress={()=>{
                                    changeStatus4();
                                    addActivity4(4);}}>
                                <View style={styles.boximg}>
                                    <Image 
                                        style={styles.btnimgheadeache}
                                        source={require('../assets/img/work.png')}
                                    />
                                </View>
                                <LinearGradient
                                    style={styles.textBtn}  
                                    colors={['rgb(51, 225, 237)', 'rgb(51, 225, 237)']}
                                >
                                    <Text style={styles.textBtnformat}>Trabajo</Text>
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
                                <View style={styles.boximg}>
                                    <Image 
                                        style={styles.btnimgheadeache}
                                        source={require('../assets/img/dog.png')}
                                    />
                                </View>
                                <LinearGradient
                                    style={styles.textBtn}  
                                    colors={['rgb(51, 225, 237)', 'rgb(51, 225, 237)']}
                                >
                                    <Text style={styles.textBtnformat}>Paseo a{'\n'}máscota</Text>
                                </LinearGradient>            
                            </TouchableOpacity>                                   
                            <TouchableOpacity
                                activeOpacity={1}
                                style={ 
                                    statusPress6 ?  styles.buttonleftp : styles.buttonleft
                                }
                                onPress={()=>{
                                    changeStatus6();
                                    addActivity6(6);}}>
                                <View style={styles.boximg}>
                                    <Image 
                                        style={styles.btnimgheadeache}
                                        source={require('../assets/img/family.png')}
                                    />
                                </View>
                                <LinearGradient
                                    style={styles.textBtn}  
                                    colors={['rgb(51, 225, 237)', 'rgb(51, 225, 237)']}
                                >
                                    <Text style={styles.textBtnformat}>Visita{'\n'}familiar</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.loginBtn} onPress={()=>{sendData()}}>
                            <LinearGradient
                                style={styles.loginBtn}  
                                colors={['rgb(51, 225, 237)', 'rgb(51, 225, 237)']}
                            >
                                <Text style={styles.loginText}>OK</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
            
    )
};
const styles = StyleSheet.create({
    generalContainer:{
        flex:1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
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
        height:'8%',
    },
    titleView:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
    },
    recomendationsBtn: {
        height:'60%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
    },
    buttonleft: {
        height:'28%',
        width:'33%',
        borderRadius:25,
        alignSelf:'center',
        marginBottom:20,
        marginRight:25,
        marginLeft:25,
        overflow:'hidden',
    },
    buttonleftp: {
        height:'28%',
        width:'33%',
        borderRadius:25,
        borderWidth:3,
        borderColor:'rgb(51, 225, 237)',
        alignSelf:'center',
        overflow:'hidden',
        marginRight:25,
        marginLeft:25,
        marginBottom:20,
    },
    boximg:{
        height:'65%',
        width:'65%',
        alignSelf:'center',
        justifyContent:'center'
    },
    btnimgheadeache:{
        width: 65,
        height: 65,
        alignSelf:'center',
    },  
    textBtn:{
        height:'35%',
        width:'100%',
        justifyContent:'center',
        borderRadius: 10,
    },
    textBtnformat:{
        fontSize:14,
        textAlign:'center',
        color:'white',
    },    
    footer:{
        height:'20%',
        backgroundColor:'white',
        justifyContent:'center',
    },
    loginBtn:{
        height:'50%',
        width:"60%",
        borderRadius: 12,
        alignItems:"center",
        alignSelf: 'center',
        justifyContent:'center'
      },
      loginText: {
        color: 'white',
        fontWeight:'bold',
      },
})