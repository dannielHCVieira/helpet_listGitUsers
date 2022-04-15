import React from 'react';

import { useFonts, Nunito_400Regular, Nunito_500Medium, Nunito_700Bold } 
from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';

import { ThemeProvider} from 'styled-components/native'

import { Home } from "./src/screens/Home";

import THEME from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold
  });

  return (
    <ThemeProvider theme={THEME}>
      <Home/>
    </ThemeProvider>
    
  );
}