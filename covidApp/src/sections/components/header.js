import React from 'react'

import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    Platform
} from 'react-native';

function Header(props) {
    return (
        <View>
            <SafeAreaView style={styles.headerContainer} >
                <View>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/img/01.png')}/>
                </View>
                <View style={styles.tittle}>
                    <Text><Text style={styles.sectionTitle}>COLOMBIA </Text><Text style={styles.sectionBoldTitle}>UNIDA</Text></Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
        headerContainer: {
            justifyContent: 'center', 
            alignItems: 'center', 
            width: '100%', 
            height: 250,
            marginTop: 20,
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
        
        logo: {
            width: 260, 
            height: 160, 
            marginTop: Platform.select({
                ios: 80,
                android: 20
            }),
            padding: 10,
            paddingBottom: 0,
            resizeMode: 'contain'
        },
    },
);

export default Header;