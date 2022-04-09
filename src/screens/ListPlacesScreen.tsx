import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const ListPlacesScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('screens.listPlaces.title')}</Text>
    </View>
  );
};
export default ListPlacesScreen;
