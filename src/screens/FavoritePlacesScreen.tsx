import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const FavoritePlacesScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('screens.favoritePlaces.title')}</Text>
    </View>
  );
};

export default FavoritePlacesScreen;
