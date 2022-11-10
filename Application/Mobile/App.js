import React from 'react';
import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme, } from '@react-navigation/native';
import AppNavigation from './pages/navigation/AppNavigation';
import 'react-native-gesture-handler';
import { DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme, Provider as PaperProvider } from 'react-native-paper';

// Default (light) theme of the application
const CombinedDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    primary: '#0f7375',
    accent: '#c2cd23',
    // Add more colors here to customize the theme. Please check:
    // https://callstack.github.io/react-native-paper/4.0/theming.html
  }
};

// Dark theme of the application
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};

const App = () => {
  return (
    <PaperProvider theme={CombinedDefaultTheme}>
      <NavigationContainer theme={CombinedDefaultTheme}>
        <AppNavigation />
      </NavigationContainer>
    </PaperProvider>
  )
};

export default App;
