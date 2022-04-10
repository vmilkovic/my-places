import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
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
