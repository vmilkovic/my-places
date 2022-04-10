import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import SignInScreen from 'screens/SignInScreen';
import SignUpScreen from 'screens/SignUpScreen';

const AuthStackNavigator = createNativeStackNavigator();

const AuthNavigator = () => {
  const { t } = useTranslation();

  return (
    <AuthStackNavigator.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStackNavigator.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: t('screens.signIn.title'),
        }}
      />
      <AuthStackNavigator.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: t('screens.signUp.title'),
        }}
      />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthNavigator;
