import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const SignUpScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('screens.signUp.title')}</Text>
    </View>
  );
};

export default SignUpScreen;
