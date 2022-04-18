import React from 'react';

import { useFonts, Nunito_400Regular, Nunito_500Medium, Nunito_700Bold } 
from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';
import Navigator from '~/routes/basicStack';
import { ThemeProvider} from 'styled-components/native';


import THEME from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold
  });

  if (!fontsLoaded){ 
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={THEME}>
      <Navigator/>
    </ThemeProvider>
    
  );
}