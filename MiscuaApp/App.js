import 'react-native-gesture-handler';
import * as React from 'react';
import { Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Login } from './components/Login';
import { Activities } from './components/Profile';
import { LoginMiscua } from './components/LoginMiscua';
import { howto } from './components/howto';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="LoginMiscua"
          component={LoginMiscua} 
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="howto"
          component={ howto }
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Profile" 
          component={Activities} 
          options={{ headerShown: false }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
