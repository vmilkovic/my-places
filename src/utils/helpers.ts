import { PermissionsAndroid, Alert } from 'react-native';
import { GOOGLE_MAPS_API_KEY } from '@env';

import { GOOGLE_GEOCODE_API_URL } from './constants';

import type { NavigationProp } from '@react-navigation/native';
import { Location, PermissionsTranslation } from './types';

export const setHeaderTitle = (
  navigation: NavigationProp<{}>,
  title: string,
  isStackNavigator: boolean = false,
) => {
  const stackNavigator = isStackNavigator ? navigation : navigation.getParent();
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

export const requestCameraPermission = async (
  translation: PermissionsTranslation,
) => {
  const { title, description, button } = translation;

  const result = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA,
  );

  if (result !== PermissionsAndroid.RESULTS.GRANTED) {
    Alert.alert(title, description, [{ text: button }]);
    return false;
  }

  return true;
};

export const requestLocationPermissions = async (
  translation: PermissionsTranslation,
) => {
  const { title, description, button } = translation;

  const result = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
  );

  if (result !== PermissionsAndroid.RESULTS.GRANTED) {
    Alert.alert(title, description, [{ text: button }]);
    return false;
  }

  return true;
};

export const getLocationAddress = async (
  location: Location,
  errorMessage: string,
) => {
  const response = await fetch(
    `${GOOGLE_GEOCODE_API_URL}?latlng=${location.latitude},${location.longitude}&key=${GOOGLE_MAPS_API_KEY}`,
  );

  if (!response.ok) {
    throw new Error(errorMessage);
  }

  const responseData = await response.json();

  if (!responseData.results) {
    throw new Error(errorMessage);
  }

  return responseData.results[0].formatted_address;
};
