import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const EditPlaceScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('screens.editPlace.title')}</Text>
    </View>
  );
};

export default EditPlaceScreen;
