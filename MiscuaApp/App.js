import 'react-native-gesture-handler';
import * as React from 'react';
import { Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { atentionLines } from './components/atentionLines';
import { LoginMiscua } from './components/LoginMiscua';
import { register } from './components/register';
import { howto } from './components/howto';
import { main } from './components/main';
import { creators } from './components/creators';
import { confirmationScreen } from './components/confirmationScreen';
import { positiveConfirmation } from './components/positiveConfirmation';
import { map } from './components/map';
import { analyzingContagion } from './components/analyzingContagion';
import { symptoms } from './components/symptoms';
import { activities } from './components/activities';
import { passwordRequest } from './components/passwordRequest';
import { recomendations } from './components/recomendations';


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
          name="register"
          component={ register } 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="passwordRequest"
          component={ passwordRequest } 
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="symptoms"
          component={ symptoms } 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="activities"
          component={ activities } 
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
          name="recomendations"
          component={ recomendations }
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="map"
          component={ map }
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="positiveConfirmation" 
          component={ positiveConfirmation } 
          options={{ headerShown: false }}
        /> 
        <Stack.Screen 
          name="creators" 
          component={ creators } 
          options={{ headerShown: false }}
        /> 
        <Stack.Screen 
          name="atentionLines" 
          component={ atentionLines } 
          options={{ headerShown: false }}
        /> 
        <Stack.Screen 
          name="confirmationScreen" 
          component={ confirmationScreen } 
          options={{ headerShown: false }}
        /> 
        <Stack.Screen 
          name="analyzingContagion" 
          component={ analyzingContagion } 
          options={{ headerShown: false }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
