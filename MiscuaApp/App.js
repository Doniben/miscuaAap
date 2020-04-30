import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginMiscua } from './components/LoginMiscua';
import { howto } from './components/howto';
import { main } from './components/main';
import { activities } from './components/activities';
import { analyzingContagion } from './components/analyzingContagion';
import { atentionLines } from './components/atentionLines';
import { confirmationScreen } from './components/confirmationScreen';
import { recomendations } from './components/recomendations';
import { symptoms } from './components/symptoms';
import { positiveConfirmation } from './components/positiveConfirmation';
import { gpsRequest } from './components/gpsRequest';
import { mapOptions } from './components/mapOptions';
import { map } from './components/map';
import { register } from './components/register';
import { AuthContext } from "./context";
import { passwordRequest } from './components/passwordRequest';
import {
  Splash
} from "./Screens";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="LoginMiscua"
      component={ LoginMiscua }
      options={{ headerShown: false }}
    />
    <AuthStack.Screen
      name="register"
      component={ register }
      options={{ headerShown: false }}
    />
    <AuthStack.Screen
      name="passwordRequest"
      component={ passwordRequest }
      options={{ headerShown: false }}
    />
  </AuthStack.Navigator>
);


const AppStack = createStackNavigator();
const AppStackScreen = () => (
  <AppStack.Navigator initialRouteName="howto">
    <AppStack.Screen name="howto" component={ howto } options={{ headerShown: false, headerLeft: null }} />
    <AppStack.Screen name="main" component={ main } options={{ headerShown: false, headerLeft: null }}/>
    <AppStack.Screen name="recomendations" component={ recomendations } options={{ headerShown: false, headerLeft: null }}/>
    <AppStack.Screen name="analyzingContagion" component={ analyzingContagion } options={{ headerShown: false, headerLeft: null }} />
    <AppStack.Screen name="atentionLines" component={ atentionLines } options={{ headerShown: false }}/>
    <AppStack.Screen name="confirmationScreen" component={confirmationScreen} options={{ headerShown: false }}/>
    <AppStack.Screen name="symptoms" component={ symptoms } options={{ headerShown: false }}/>
    <AppStack.Screen name="positiveConfirmation" component={positiveConfirmation } options={{ headerShown: false }}/>
    <AppStack.Screen name="gpsRequest" component={ gpsRequest } options={{ headerShown: false }}/>
    <AppStack.Screen name="mapOptions" component={ mapOptions } options={{ headerShown: false }}/>
    <AppStack.Screen name="map" component={ map } options={{ headerShown: false }}/>
    <AppStack.Screen name="activities" component={ activities } options={{ headerShown: false }}/>
    <AppStack.Screen name="creators" component={ creators } options={{ headerShown: false }}/>
  </AppStack.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={AppStackScreen}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: true
        }}
      />
    )}
  </RootStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: (value) => {
        setIsLoading(false);
        setUserToken(value);
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken(value);
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};