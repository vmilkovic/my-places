import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useFocusEffect } from '@react-navigation/native';

import { setHeaderTitle, setRightHeader } from 'utils/helpers';

import type { AddPlacesProps } from 'utils/types';

const AddPlaceScreen = ({ navigation }: AddPlacesProps) => {
  const { t } = useTranslation();

  useFocusEffect(
    useCallback(() => {
      setHeaderTitle(navigation, t('screens.addPlace.title'));
      setRightHeader(navigation, () => <View />);
    }, [navigation, t]),
  );

  return (
    <View>
      <Text>{t('screens.addPlace.title')}</Text>
    </View>
  );
};

export default AddPlaceScreen;
