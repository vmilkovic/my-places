import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useFocusEffect } from '@react-navigation/native';

import HeaderRight from 'components/HeaderRight';
import { setHeaderTitle, setRightHeader } from 'utils/helpers';
import Colors from 'utils/colors';
import Fonts from 'utils/fonts';

import type { ListPlacesProps } from 'utils/types';

const PlaceDetailScreen = ({ navigation }: ListPlacesProps) => {
  const { t } = useTranslation();

  useFocusEffect(
    useCallback(() => {
      setHeaderTitle(navigation, t('screens.listPlaces.title'));
      setRightHeader(navigation, () => (
        <HeaderRight
          name="edit-note"
          color={Colors.Gold}
          size={Fonts.size.HeaderIcon}
          onPress={() => navigation.navigate('EditPlace')}
        />
      ));
    }, [navigation, t]),
  );

  return (
    <View>
      <Text>{t('screens.placeDetail.title')}</Text>
    </View>
  );
};

export default PlaceDetailScreen;
