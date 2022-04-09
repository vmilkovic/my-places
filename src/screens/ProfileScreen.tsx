import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const ProfileScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('screens.profile.title')}</Text>
    </View>
  );
};

export default ProfileScreen;
