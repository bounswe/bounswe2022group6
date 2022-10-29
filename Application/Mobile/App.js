import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import AppNavigation from './pages/navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
//import 'react-native-gesture-handler';


const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
