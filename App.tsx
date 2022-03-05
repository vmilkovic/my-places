import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';

import { store } from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <Text>My Places</Text>
    </Provider>
  );
};

export default App;
