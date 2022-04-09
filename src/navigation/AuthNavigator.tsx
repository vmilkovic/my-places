import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import SignInScreen from 'screens/SignInScreen';
import SignUpScreen from 'screens/SignupScreen';
import HeaderLogo from 'components/HeaderLogo';
import { Colors } from 'assets';

const AuthStackNavigator = createNativeStackNavigator();
const { Primary: PrimaryColor } = Colors;

const AuthNavigator = () => {
  const { t } = useTranslation();

  return (
    <AuthStackNavigator.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerTintColor: PrimaryColor,
      }}>
      <AuthStackNavigator.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: t('screens.signIn.title'),
          headerLeft: HeaderLogo,
        }}
      />
      <AuthStackNavigator.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: t('screens.signUp.title'),
          headerLeft: HeaderLogo,
        }}
      />
    </AuthStackNavigator.Navigator>
  );
};

export default AuthNavigator;
