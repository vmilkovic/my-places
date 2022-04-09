import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';

const AppNavigator = () => {
  const isAuth = true;

  return (
    <NavigationContainer>
      {isAuth && <MainNavigator />}
      {!isAuth && <AuthNavigator />}
    </NavigationContainer>
  );
};
export default AppNavigator;
