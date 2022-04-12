import React, { useCallback, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { loadPlaces } from 'store/actions/places';
import PlaceItem from 'components/PlaceItem';
import HeaderRight from 'components/HeaderRight';
import { setHeaderTitle, setRightHeader } from 'utils/helpers';
import Colors from 'utils/colors';
import Fonts from 'utils/fonts';

import type { ListPlacesProps } from 'utils/types';

const ListPlacesScreen = ({ navigation }: ListPlacesProps) => {
  const { t } = useTranslation();

  const places: Place[] = useSelector(state => state.places.list);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      setHeaderTitle(navigation, t('screens.listPlaces.title'));
      setRightHeader(navigation, () => (
        <HeaderRight
          name="star"
          color={Colors.Gold}
          size={Fonts.size.HeaderIcon}
          onPress={() => navigation.navigate('FavoritePlaces')}
        />
      ));
      dispatch(loadPlaces());
    }, [navigation, t, dispatch]),
  );

  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={itemData.item.address}
          onSelect={() => {
            navigation.navigate('PlaceDetail', {
              placeTitle: itemData.item.title,
              placeId: itemData.item.id,
            });
          }}
        />
      )}
    />
  );
};
export default ListPlacesScreen;
