import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './pages/navigation/AppNavigation';
import 'react-native-gesture-handler';


const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  )
};

export default App;
