import React, { Component } from 'react';
import Unorderedlist from 'react-native-unordered-list';

import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    Platform,
    SafeAreaView
} from 'react-native';

export function creators({ navigation }){
    return (
            <View style={styles.howToContainer}>
                <ScrollView>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.navigate('main')}>
                            <Image style={styles.leftNavigation}
                                source={require('../assets/img/back-50.png')}
                            />  
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.rightInfo}
                                source={require('../assets/img/info.png')}
                            />  
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerContainer}>
                        <Image
                            style={styles.logo}
                            source={require('../assets/img/02.png')}/>
                    </View>
                    <View>
                        <Text style={styles.textVideo}>Ésta app nace del sentimiento de solidaridad, 
                                                    empatía y trabajo en equipo de nosotros los colombianos. 
                                                    Quisimos aportar con nuestros conocimientos y soluciones 
                                                    tecnológicas y así mitigar el impacto del COVID-19 en nuestro 
                                                    país. Agradecemos a todos los que ayudaron e hicieron 
                                                    parte de este noble proyecto.
                        </Text>
                    </View>
                    <View style={styles.tittle}>
                        <Text><Text style={styles.sectionTitle}>COLOMBIA </Text><Text style={styles.sectionBoldTitle}>UNIDA</Text></Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf:'center' }}>
                        <View>
                            <Image
                                style={styles.imageVideo}
                                source={require('../assets/img/conicomlab.png')}
                            />
                            <Text style={styles.descripcion}>
                                conicomlab.com
                            </Text>
                        </View>
                        <View>
                            <Image
                                style={styles.imageVideo}
                                source={require('../assets/img/thedataculture.png')}
                            />
                            <Text style={styles.descripcion}>
                                thedataculture.com
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf:'center', marginBottom:20 }}>
                        <View>
                            <Image
                                style={styles.imageVideo}
                                source={require('../assets/img/siglo.png')}
                            />
                            <Text style={styles.descripcion}>
                                siglo.tech
                            </Text>
                        </View>
                        <View>
                            <Image
                                style={styles.imageVideo}
                                source={require('../assets/img/dochjaFilmo.png')}
                            />
                            <Text style={styles.descripcion}>
                                doniben.tech
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf:'center', marginBottom:20 }}>
                        <View>
                            <Image
                                style={styles.imageVideo}
                                source={require('../assets/img/b4bcompany.png')}
                            />
                            <Text style={styles.descripcion}>
                                ********
                            </Text>
                        </View>
                        <View>
                                <Image
                                    style={styles.imageVideo}
                                    source={require('../assets/img/prisma.png')}
                                />
                                <Text style={styles.descripcion}>
                                    *********
                                </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf:'center', marginBottom:20 }}>
                        <View>
                                <Image
                                    style={styles.imageVideo}
                                    source={require('../assets/img/idmarketing.png')}
                                />
                                <Text style={styles.descripcion}>
                                    *********
                                </Text>
                            </View>
                        <View>
                            <Image
                                style={styles.imageVideo}
                                source={require('../assets/img/comprim.png')}
                            />
                            <Text style={styles.descripcion}>
                                ********
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.sectionBoldTitle}>
                            EQUIPO
                        </Text>
                    </View>
                    <View style={styles.contributors}>
                        <Unorderedlist bulletUnicode={0x2800}>
                            <Unorderedlist><Text>Daicy C. Echeverri C</Text></Unorderedlist>
                            <Unorderedlist><Text>Daniel Alejandro Ramirez</Text></Unorderedlist>
                            <Unorderedlist><Text>David Arbeláez Guzman</Text></Unorderedlist>
                            <Unorderedlist><Text>Doniben Jimenez</Text></Unorderedlist>
                            <Unorderedlist><Text>Ivan Andres Diaz</Text></Unorderedlist>
                            <Unorderedlist><Text>Jhon Sebastian Arevalo Ballesteros</Text></Unorderedlist>
                            <Unorderedlist><Text>John H. Rodríguez</Text></Unorderedlist>
                            <Unorderedlist><Text>Juan</Text></Unorderedlist>
                            <Unorderedlist><Text>Juan Sebastian Calle</Text></Unorderedlist>
                            <Unorderedlist><Text>Leonardo Galeano</Text></Unorderedlist>
                            <Unorderedlist><Text>Luis Guillermo Aguirre Abad</Text></Unorderedlist>
                            <Unorderedlist><Text>Natalia Medina</Text></Unorderedlist>
                            <Unorderedlist><Text>Natali Ramírez García</Text></Unorderedlist>
                            <Unorderedlist><Text>Oscar muñoz</Text></Unorderedlist>       
                            <Unorderedlist><Text>Steven Serje</Text></Unorderedlist>
                            <Unorderedlist><Text>Yesid Gutierrez</Text></Unorderedlist>
                        </Unorderedlist>
                    </View>
                </ScrollView>
            </View>
    )}

const styles = StyleSheet.create({
    howToContainer: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        marginTop: Platform.select({
            ios: 20,
            android: 15
        }),
        backgroundColor: 'white',
        alignSelf: 'center',
    },

    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    leftNavigation: {
        width: 10,
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

    textVideo: {
        fontSize: 16,
        color: 'rgb(45, 45, 68)',
        textAlign: 'center',
        width: '80%',
        alignSelf:'center',
        textAlign:Platform.select({
            ios: 'justify',
            android:'center',
        }),
    },
    imageVideo: {
        resizeMode: "contain",
        width: 160,
        alignSelf: 'center',
        height: 100,
        marginTop: 20
    },

    descripcion: {
        textAlign: 'center',
        fontSize: 14
    },

    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'rgb(11, 191, 214)',
        borderRadius: 5,
        width: 10,
        height: 35,
        marginBottom: 0,
        margin: 10,
        shadowOpacity: 0.4
    },
    textButton: {
        fontSize: 16,
        color: 'white'

    },

    headerContainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%',
        marginBottom:20,
    },

    tittle: {
        marginTop: 10,
        flex: 1,
        alignItems: 'center',
        textAlign: 'center'
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: 'rgb(45, 45, 68)',
        paddingTop: 10,
        textAlign: 'center',
        alignSelf: 'center'
    },

    sectionBoldTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgb(45, 45, 68)',
        paddingTop: 10,
        textAlign: 'center',
        marginBottom:10,
    },
    
    logo: {
        width: 260, 
        height: 80, 
        resizeMode: 'contain',
    },
    contributors: {
    width: '80%',
    alignSelf:'center', 
    marginBottom:15,
    }
})