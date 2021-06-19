/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  AuthContext,
  useAuthenticationContext,
} from './src/contexts/AuthContext';
import {IntroApp, Login, SignUp} from './src/screens';

const App = () => {
  const Stack = createStackNavigator();
  const context = useAuthenticationContext();
  const [hasAuth, setHasAuth] = useState(false);

  return (
    <SafeAreaProvider>
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            {!hasAuth ? (
              <>
                <Stack.Screen
                  name="SignUp"
                  component={SignUp}
                  initialParams={{setHasAuth}}
                />
                <Stack.Screen name="Login" component={Login} />
              </>
            ) : (
              <Stack.Screen
                name="Intro"
                component={IntroApp}
                initialParams={{setHasAuth}}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;
