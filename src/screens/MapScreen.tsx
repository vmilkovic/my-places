import React, { useCallback, useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

import HeaderRight from 'components/HeaderRight';
import { setRightHeader } from 'utils/helpers';
import Colors from 'utils/colors';
import Fonts from 'utils/fonts';
import { Location } from 'utils/types';
import { useTranslation } from 'react-i18next';

const MapScreen = ({ navigation, route }) => {
  const { params } = route;
  const { pickedLocation, readonly } = params;
  const { latitude, longitude } = pickedLocation;

  const initialLocation: Location = {
    latitude: latitude,
    longitude: longitude,
  };

  const [selectedLocation, setSelectedLocation] =
    useState<Location>(initialLocation);

  const mapRegion = {
    latitude: selectedLocation.latitude ? selectedLocation.latitude : latitude,
    longitude: selectedLocation.longitude
      ? selectedLocation.longitude
      : longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const { t } = useTranslation();

  useFocusEffect(
    useCallback(() => {
      setRightHeader(
        navigation,
        () =>
          readonly || (
            <HeaderRight
              name="done"
              color={Colors.Dark}
              size={Fonts.size.HeaderIcon}
              onPress={() =>
                navigation.navigate('AddPlaceTab', { selectedLocation })
              }
            />
          ),
        true,
      );
    }, [navigation, selectedLocation]),
  );

  const selectLocationHandler = (event: {
    nativeEvent: { coordinate: { latitude: number; longitude: number } };
  }) => {
    if (readonly) {
      return;
    }

    setSelectedLocation({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
  };

  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.latitude,
      longitude: selectedLocation.longitude,
    };
  }

  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onPress={selectLocationHandler}>
      {markerCoordinates && (
        <Marker
          title={
            t<string>('screens.map.marker.title') +
            ' - Lat: ' +
            markerCoordinates.latitude +
            ' Lng: ' +
            markerCoordinates.longitude
          }
          coordinate={markerCoordinates}
        />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  headerButton: {
    marginHorizontal: 20,
  },
  headerButtonText: {
    fontSize: 16,
    color: Platform.OS === 'android' ? 'white' : Colors.Primary,
  },
});

export default MapScreen;
