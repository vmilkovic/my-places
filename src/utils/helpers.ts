import { PermissionsAndroid, Alert } from 'react-native';
import { GOOGLE_MAPS_API_KEY } from '@env';

import { GOOGLE_GEOCODE_API_URL } from './constants';

import type { NavigationProp } from '@react-navigation/native';

export const setHeaderTitle = (
  navigation: NavigationProp<{}>,
  title: string,
) => {
  const stackNavigator = navigation.getParent();
  stackNavigator.setOptions({
    title,
  });
};

export const setRightHeader = (
  navigation: NavigationProp<{}>,
  header: Element,
  isStackNavigator: boolean = false,
) => {
  const stackNavigator = isStackNavigator ? navigation : navigation.getParent();
  stackNavigator.setOptions({
    headerRight: header,
  });
};

export const requestCameraPermission = async () => {
  const result = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA,
  );

  if (result !== PermissionsAndroid.RESULTS.GRANTED) {
    Alert.alert(
      'Insufficient permissions!',
      'You need to grant camera permissions to use this app.',
      [{ text: 'Okay' }],
    );
    return false;
  }

  return true;
};

export const requestLocationPermissions = async () => {
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

export const getLocationAddress = async location => {
  const response = await fetch(
    `${GOOGLE_GEOCODE_API_URL}?latlng=${location.latitude},${location.longitude}&key=${GOOGLE_MAPS_API_KEY}`,
  );

  if (!response.ok) {
    throw new Error('Someting went wrong!');
  }

  const responseData = await response.json();

  if (!responseData.results) {
    throw new Error('Someting went wrong!');
  }

  return responseData.results[0].formatted_address;
};
