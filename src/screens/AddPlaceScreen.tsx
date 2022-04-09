import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const AddPlaceScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('screens.addPlace.title')}</Text>
    </View>
  );
};

export default AddPlaceScreen;
