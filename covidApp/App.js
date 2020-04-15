/**
 * covid19 App 
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import Login from './src/screens/containers/login'
import Register from './src/screens/containers/register'
import PassRequest from './src/screens/containers/passwordRequest'
import HowTo from './src/screens/containers/howto'
import Main from './src/screens/containers/main'
import Creators from './src/screens/containers/creators'
import ConfirmationPositive from './src/screens/containers/positiveConfirmation'
import AtentionLines from './src/screens/containers/atentionLines'
import ConfirmationScreen from './src/screens/containers/confirmationScreen'




type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <AtentionLines />
        </ScrollView>
      </View>
    );
  };
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
    },
  );


