import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer, useLinking } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { atentionLines } from './components/atentionLines';
import { LoginMiscua } from './components/LoginMiscua';
import { register } from './components/register';
import { howto } from './components/howto';
import { main } from './components/main';
import { creators } from './components/creators';
import { gpsRequest } from './components/gpsRequest'
import { confirmationScreen } from './components/confirmationScreen';
import { positiveConfirmation } from './components/positiveConfirmation';
import { analyzingContagion } from './components/analyzingContagion';
import { recomendations } from './components/recomendations';
import { SplashScreen } from 'expo';
import { mapOptions } from './components/mapOptions';
import DotSpinner from './components/loadingSpinners/dotSpinner'
import { map } from './components/map';
import { symptoms } from './components/symptoms';
import { activities } from './components/activities';
import { passwordRequest } from './components/passwordRequest';


const Stack = createStackNavigator();

export default function MyStack(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef, {
    prefixes: ['https://miscua.com', 'miscua://'],
    config: {
      Chat: 'feed/:sort',
    },
  });

  // Load any resources or data that we need prior to rendering the app                   
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state                                              
        setInitialNavigationState(await getInitialState());
        <DotSpinner />
        // Load fonts                                                                     
      } catch (e) {
        // We might want to provide this error information to an error reporting service  
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
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
              <Stack.Screen 
                name="recomendations" 
                component={ recomendations } 
                options={{ headerShown: false }}
              /> 
              <Stack.Screen 
                name="gpsRequest" 
                component={ gpsRequest } 
                options={{ headerShown: false }}
              /> 
              <Stack.Screen 
                name="mapOptions" 
                component={ mapOptions } 
                options={{ headerShown: false }}
              /> 
              <Stack.Screen
                name="map"
                component={ map }
                options={{ headerShown: false }}
              />
              
            </Stack.Navigator>
          </NavigationContainer>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(45, 45, 68)',
  },
})
