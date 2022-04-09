import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const SettingsScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('screens.settings.title')}</Text>
    </View>
  );
};

export default SettingsScreen;
