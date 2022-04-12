import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { loadFavoritePlaces } from 'store/actions/places';
import PlaceItem from 'components/PlaceItem';

const FavoritePlacesScreen = ({ navigation }) => {
  const user: User = useSelector(state => state.user);
  const places: Place[] = useSelector(state => state.places.favorites);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  useFocusEffect(
    useCallback(() => {
      dispatch(loadFavoritePlaces(user.id));
    }, [navigation, dispatch]),
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
export default FavoritePlacesScreen;
