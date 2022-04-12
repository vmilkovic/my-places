import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import i18n from 'core/i18n';
import { useSelector } from 'react-redux';

import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import User from 'modules/user';

const AppNavigator = () => {
  const user: User = useSelector(state => state.user);
  const isAuth = !!user.email;

  useEffect(() => {
    i18n.changeLanguage(user.language);
  }, [user.language]);

  return (
    <NavigationContainer>
      {!isAuth && <AuthNavigator />}
      {isAuth && <MainNavigator />}
    </NavigationContainer>
  );
};
export default AppNavigator;
