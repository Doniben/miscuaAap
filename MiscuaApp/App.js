import 'react-native-gesture-handler';
import * as React from 'react';
import { Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { atentionLines } from './components/atentionLines';
import { LoginMiscua } from './components/LoginMiscua';
import { howto } from './components/howto';
import { main } from './components/main'

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="LoginMiscua"
          component={ LoginMiscua } 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="howto"
          component={ howto }
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="main"
          component={ main }
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="atentionLines" 
          component={ atentionLines } 
          options={{ headerShown: false }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
