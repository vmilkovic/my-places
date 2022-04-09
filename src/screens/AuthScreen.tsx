import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const AuthScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('screens.auth.title')}</Text>
    </View>
  );
};

export default AuthScreen;
