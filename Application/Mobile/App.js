import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { LoginPage } from './pages/authantication/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUpPage } from './pages/authantication/Signup';
import { Text } from "@react-native-material/core";

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginPage}
          />
          <Stack.Screen
            name="Signup"
            component={SignUpPage}
          />
        </Stack.Navigator>
      </NavigationContainer >
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
