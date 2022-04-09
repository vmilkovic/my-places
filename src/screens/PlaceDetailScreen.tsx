import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const PlaceDetailScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('screens.placeDetail.title')}</Text>
    </View>
  );
};

export default PlaceDetailScreen;
