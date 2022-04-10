import React, { useState } from 'react';
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';

import Colors from 'utils/colors';
import MapPreview from './MapPreview';

const LocationPicker = (props: { onLocationPicked: any; navigation: any }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [pickedLocation, setPickedLocation] = useState();

  const { onLocationPicked, navigation } = props;

  const verifyPermissions = async () => {
    const result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    );

    if (result !== PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant location permissions to use this app.',
        [{ text: 'Okay' }],
      );
      return false;
    }

    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    try {
      setIsFetching(true);
    } catch (err) {
      Alert.alert(
        'Could not fetch location!',
        'Please try again later or pick a location on the map.',
        [{ text: 'Okay' }],
      );
    }

    setIsFetching(false);
  };

  const pickOnMapHanlder = () => {
    navigation.navigate('Map');
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
        <Button
          title="Get User Location"
          color={Colors.Primary}
          onPress={getLocationHandler}
        />
        <Button
          title="Pick on Map"
          color={Colors.Primary}
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default LocationPicker;
