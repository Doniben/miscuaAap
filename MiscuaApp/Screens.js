import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Emoji from 'react-native-emoji';
import { AuthContext } from "./context";

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);


export const Splash = () => (
  <ScreenContainer>
      <Image
      source={require('./assets/img/logo.png')}
      style={styles.img}/>
    <Text>Made with <Emoji name="heart" style={{fontSize: 14}}/>{'\n'}in Colombia</Text>
  </ScreenContainer>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginVertical: 10,
      borderRadius: 5
    },
    img:{
        width:100,
        height:120,
        alignSelf:'center',
        margin:10,
    }
  });