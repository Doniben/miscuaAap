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

export function symptoms ({ navigation }){
    const [statusPress1, setStatuspress1] = useState(false);
    const [statusPress2, setStatuspress2] = useState(false);
    const [statusPress3, setStatuspress3] = useState(false);
    const [statusPress4, setStatuspress4] = useState(false);
    const [statusPress5, setStatuspress5] = useState(false);
    const [statusPress6, setStatuspress6] = useState(false);
    const [listSymptoms,setListSymptoms] = useState([]);

    
    const addSymptom1 = (a) => {
        if (statusPress1 === false)
        {listSymptoms.push(a)}
        else {
            listSymptoms.splice( listSymptoms.indexOf(a), 1 );
        }
    }
    const addSymptom2 = (a) => {
        if (statusPress2 === false)
        {listSymptoms.push(a)}
        else {
            listSymptoms.splice( listSymptoms.indexOf(a), 1 );
        }
    }
    const addSymptom3 = (a) => {
        if (statusPress3 === false)
        {listSymptoms.push(a)}
        else {
            listSymptoms.splice( listSymptoms.indexOf(a), 1 );
        }
    }
    const addSymptom4 = (a) => {
        if (statusPress4 === false)
        {listSymptoms.push(a)}
        else {
            listSymptoms.splice( listSymptoms.indexOf(a), 1 );
        }
    }
    const addSymptom5 = (a) => {
        if (statusPress5 === false)
        {listSymptoms.push(a)}
        else {
            listSymptoms.splice( listSymptoms.indexOf(a), 1 );
        }
    }
    const addSymptom6 = (a) => {
        if (statusPress6 === false)
        {listSymptoms.push(a)}
        else {
            listSymptoms.splice( listSymptoms.indexOf(a), 1 );
        }
    }

    const changeStatus1 = () => {
        if (statusPress1 === false)
        {
            setStatuspress1(true);
        }
        else{
            setStatuspress1(false);
        }
    }
    const changeStatus2 = () => {
        if (statusPress2 === false)
        {
            setStatuspress2(true);
        }
        else{
            setStatuspress2(false);
        }
    }
    const changeStatus3 = () => {
        if (statusPress3 === false)
        {
            setStatuspress3(true);
        }
        else{
            setStatuspress3(false);
        }
    }
    const changeStatus4 = () => {
        if (statusPress4 === false)
        {
            setStatuspress4(true);
        }
        else{
            setStatuspress4(false);
        }
    }
    const changeStatus5 = () => {
        if (statusPress5 === false)
        {
            setStatuspress5(true);
        }
        else{
            setStatuspress5(false);
        }
    }
    const changeStatus6 = () => {
        if (statusPress6 === false)
        {
            setStatuspress6(true);
        }
        else{
            setStatuspress6(false);
        }
    }
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.generalContainer}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('main')}>
                        <Image style={styles.leftNavigation} source={require('../assets/img/back-50.png')}/>  
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('creators')}} >
                        <Image style={styles.creatorsimg} source={require('../assets/img/logo.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('atentionLines')}>
                        <Image style={styles.rightInfo} source={require('../assets/img/info.png')}/>  
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleView}>SINTOMAS</Text>
                </View>
                <View style={styles.subtitleContainer}>
    <Text style={styles.subtitletxt}>SELECCIONA LOS SINTOMAS QUE {'\n'}PRESENTAS</Text>
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
                                addSymptom1(1);
                            }}>
                            <Image 
                                style={styles.btnimgheadeache}
                                source={require('../assets/img/3x/headeache.png')}
                                />
                        </TouchableOpacity>
                        <View style={styles.textBtn}>
                            <Text style={styles.textBtnformat}>DOLOR DE{'\n'}CABEZA</Text>
                        </View>            
                        <TouchableOpacity
                            activeOpacity={1}
                            style={ 
                                statusPress3 ?  styles.buttonleftp : styles.buttonleft
                            }
                            onPress={()=>{
                                changeStatus3();
                                addSymptom3(3);
                            }}>
                            <Image 
                                style={styles.btnimgfever}
                                source={require('../assets/img/3x/fever.png')}
                                />
                        </TouchableOpacity>
                        <View style={styles.textBtn}>
                            <Text style={styles.textBtnformat}>FIEBRE</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={ 
                                statusPress5 ?  styles.buttonleftp : styles.buttonleft
                            }
                            onPress={()=>{
                                changeStatus5();
                                addSymptom5(5);
                            }}>
                            <Image 
                                style={styles.btnimgrespiratory}
                                source={require('../assets/img/3x/respiratoryDistress.png')}
                                />
                        </TouchableOpacity>
                        <View style={styles.textBtn}>
                            <Text style={styles.textBtnformat}>DIFICULTAD{'\n'}RESPIRATORIA</Text>
                        </View>                        
                    </View>
                    <View style={styles.columnRight}>
                    <TouchableOpacity
                            activeOpacity={1}
                            style={ 
                                statusPress2 ?  styles.buttonleftp : styles.buttonleft
                            }
                            onPress={()=>{
                                changeStatus2();
                                addSymptom2(2);
                            }}>
                            <Image 
                                style={styles.btnimgDry}
                                source={require('../assets/img/3x/dryCough.png')}
                                />
                    </TouchableOpacity>
                        <View style={styles.textBtn}>
                            <Text style={styles.textBtnformat}>TOS SECA</Text>
                        </View>                         
                        <TouchableOpacity
                            activeOpacity={1}
                            style={ 
                                statusPress4 ?  styles.buttonleftp : styles.buttonleft
                            }
                            onPress={()=>{
                                changeStatus4();
                                addSymptom4(4);
                            }}>
                            <Image 
                                style={styles.btnimgRunnyNose}
                                source={require('../assets/img/3x/runnyNose.png')}
                                />
                    </TouchableOpacity>
                        <View style={styles.textBtn}>
                            <Text style={styles.textBtnformat}>SECRECIÓN{'\n'}NASAL</Text>
                        </View>                                         
                        <TouchableOpacity
                            activeOpacity={1}
                            style={ 
                                statusPress6 ?  styles.buttonleftp : styles.buttonleft
                            }
                            onPress={()=>{
                                changeStatus6();
                                addSymptom6(6);
                            }}>
                            <Image 
                                style={styles.btnimgRenal}
                                source={require('../assets/img/3x/renalInsufficiency.png')}
                                />
                    </TouchableOpacity>
                        <View style={styles.textBtn}><Text style={styles.textBtnformat}>INSUFICIENCIA{'\n'}RENAL</Text></View>                                
                    </View>
                </View>
                <View style={styles.footer}>
                <TouchableOpacity style={styles.loginBtn} onPress={()=>{
                        console.log(listSymptoms);
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'main' }],
                            });}}>
                    <LinearGradient
                        style={styles.loginBtn}  
                        colors={['rgb(90, 204, 193)',  'rgb(11, 191, 214)']}
                    >
                        <Text style={styles.loginText}>HECHO</Text>
                    </LinearGradient>
                </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    safe: {
        flex:1,
        backgroundColor: 'white',
    },
    generalContainer:{
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
    creatorsimg:{
        width:Platform.select({
            ios:23,
            android:23,
        }),
        height:28,
        alignSelf:'auto',
        marginTop: Platform.select({
            ios:10,
            android:30,
        }),
    },
    rightInfo: {
        width: 30,
        height: 30,
        marginRight: 30,
        marginTop: 30,
        alignSelf:'flex-end',
    },
    titleContainer:{
        width:'30%',
        height:25,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        borderBottomColor:'rgb(51, 225, 237)',
        borderBottomWidth:3,
        marginBottom:10,
    },
    titleView:{
        width:'100%',
        textAlign:'center',
        fontSize:20,
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
        marginBottom:15,
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
        width: 80,
        height: 80,
        backgroundColor:'rgb(45, 45, 68)',
        borderRadius:100,
        alignSelf:'center',
        justifyContent:'center',
        marginBottom:5,
        position:'relative',
    },
    buttonleftp: {
        width: 80,
        height: 80,
        backgroundColor:'rgb(51, 225, 237)',
        borderRadius:80,
        alignSelf:'center',
        justifyContent:'center',
        marginBottom:5,
        position:'relative',
    },
    btnimgheadeache:{
        width: Platform.select({
            ios: 50,
            android:50
        }),
        height: Platform.select({
            ios:57,
            android:57,
        }),
        position:'absolute',
        alignSelf:'center',
        justifyContent:'center'
    },
    btnimgfever:{
        width: Platform.select({
            ios: 50,
            android:50
        }),
        height: Platform.select({
            ios:57,
            android:57,
        }),
        position:'absolute',
        alignSelf:'center',
        justifyContent:'center'
    },
    btnimgrespiratory:{
        width: Platform.select({
            ios: 55,
            android:55,
        }),
        height: Platform.select({
            ios:45,
            android:45,
        }),
        position:'absolute',
        alignSelf:'center',
        justifyContent:'center'
    },
    btnimgDry:{
        width: Platform.select({
            ios: 54,
            android:50
        }),
        height: Platform.select({
            ios: 57,
            android:52,
        }),
        position:'absolute',
        alignSelf:'center',
        justifyContent:'center'
    },
    btnimgRunnyNose:{
        width: Platform.select({
            ios: 50,
            android:50
        }),
        height: Platform.select({
            ios:57,
            android:57,
        }),
        position:'absolute',
        alignSelf:'center',
        justifyContent:'center'
    },
    btnimgRenal:{
        width: Platform.select({
            ios: 60,
            android:60
        }),
        height: Platform.select({
            ios:49,
            android:49,
        }),
        position:'absolute',
        alignSelf:'center',
        justifyContent:'center'
    },
    buttonright: {
        width: '50%',
        height: '10%',
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
        marginBottom:2,        
    },
    textBtnformat:{
        fontSize:16,
        textAlign:'center',
        fontWeight:'bold',
    },      
    footer:{
        height:'10%',
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