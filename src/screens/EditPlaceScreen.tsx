import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

const EditPlaceScreen = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t<string>('screens.editPlace.title')}</Text>
    </View>
  );
};

export default EditPlaceScreen;
