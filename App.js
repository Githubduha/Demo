import { useState } from 'react';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import React from 'react';

const Stack = createNativeStackNavigator();

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const SignInComponent = ({ navigation, route }) => (
    <SignInScreen setIsSignedIn={setIsSignedIn} navigation={navigation} route={route} />
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isSignedIn ? 'Home' : 'SignIn'}>
        {isSignedIn ? (
          <>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Profile' component={ProfileScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name='SignIn' component={SignInComponent} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
