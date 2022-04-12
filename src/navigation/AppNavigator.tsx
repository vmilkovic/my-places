import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import i18n from 'core/i18n';
import { useSelector } from 'react-redux';

import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';

import { IUser } from 'utils/interfaces';

const AppNavigator = () => {
  const user: IUser = useSelector(state => state.user);
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
