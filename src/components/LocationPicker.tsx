import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { useTranslation } from 'react-i18next';

import { getLocationAddress, requestLocationPermissions } from 'utils/helpers';
import Colors from 'utils/colors';
import MapPreview from './MapPreview';
import CustomButton from './CustomButton';
import { Location } from 'utils/types';

const LocationPicker = (props: {
  onLocationPicked: (location: Location) => void;
  mapPickedLocation: any;
  navigation: Object;
}) => {
  const { onLocationPicked, navigation, mapPickedLocation } = props;

  const [isFetching, setIsFetching] = useState(false);
  const [pickedLocation, setPickedLocation] = useState<Location>();

  const { t } = useTranslation();

  useEffect(() => {
    getLocationHandler();
  }, []);

  useEffect(() => {
    setPickedLocation(mapPickedLocation);
    onLocationPicked(mapPickedLocation);
  }, [mapPickedLocation, onLocationPicked, setPickedLocation]);

  const getLocationHandler = async () => {
    const hasPermission = await requestLocationPermissions();
    if (!hasPermission) {
      return;
    }

    try {
      setIsFetching(true);

      Geolocation.getCurrentPosition(
        async position => {
          const { coords } = position;
          const { latitude, longitude } = coords;

          const address = await getLocationAddress(coords);

          setPickedLocation({ latitude, longitude, address });
          onLocationPicked({ latitude, longitude, address });
        },
        error => {
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );
    } catch (err) {
      Alert.alert(
        t<string>('components.locationPicker.locationDisabled.title'),
        t<string>('components.locationPicker.locationDisabled.description'),
        [
          {
            text: t<string>(
              'components.locationPicker.locationDisabled.button',
            ),
          },
        ],
      );
    }

    setIsFetching(false);
  };

  const pickOnMapHanlder = () => {
    navigation.navigate('Map', { pickedLocation });
  };

  return (
    <View style={styles.locationPicker}>
      <MapPreview
        style={styles.mapPreview}
        location={pickedLocation}
        onPress={pickOnMapHanlder}>
        {isFetching ? (
          <ActivityIndicator size="large" color={Colors.Primary} />
        ) : (
          <Text>No location chosen yet!</Text>
        )}
      </MapPreview>
      <View style={styles.actions}>
        <CustomButton
          style={styles.button}
          title={t<string>('components.locationPicker.buttons.userLocation')}
          onPress={getLocationHandler}
        />
        <CustomButton
          style={styles.button}
          title={t<string>('components.locationPicker.buttons.map')}
          onPress={pickOnMapHanlder}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 10,
    width: '100%',
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  actions: {
    alignSelf: 'center',
  },
  button: {
    marginVertical: 2.5,
  },
});

export default LocationPicker;
