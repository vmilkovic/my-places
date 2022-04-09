import React from 'react';
import { Provider } from 'react-redux';

import AppNavigator from 'navigation/AppNavigator';
import { store } from 'store';
import 'core/i18n';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
