import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const SignInScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('screens.signIn.title')}</Text>
    </View>
  );
};

export default SignInScreen;
