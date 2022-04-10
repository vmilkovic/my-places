import React, { useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import Colors from 'utils/colors';

const MapScreen = ({ navigation }) => {
  const initialLocation = {
    lat: 37.78,
    lng: -122.43,
  };
  const readonly = false;

  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  const mapRegion = {
    latitude: selectedLocation ? 37.78 : 37.78,
    longitude: selectedLocation ? -122.43 : -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationHandler = (event: {
    nativeEvent: { coordinate: { latitude: any; longitude: any } };
  }) => {
    if (readonly) {
      return;
    }

    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    };
  }

  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onPress={selectLocationHandler}>
      {markerCoordinates && (
        <Marker title="Picked Location" coordinate={markerCoordinates} />
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
