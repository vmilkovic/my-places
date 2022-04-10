import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

import AppNavigator from 'navigation/AppNavigator';
import { store } from 'store';
import 'core/i18n';

import Colors from 'utils/colors';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.Primary,
    accent: Colors.Accent,
    background: Colors.Background,
    surface: Colors.Surface,
    text: Colors.Text,
  },
};

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
