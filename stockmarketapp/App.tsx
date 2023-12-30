// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider, useAuth } from './auth/AuthContext';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import TabViewExample from './screens/TabViewExample';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();


const App = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer >
      <Stack.Navigator>
        {user ? (
          <Stack.Screen  name="Home" component={TabViewExample} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AppWrapper = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  
});

export default AppWrapper;
