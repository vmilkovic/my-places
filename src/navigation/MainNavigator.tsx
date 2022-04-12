import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import EditPlaceScreen from 'screens/EditPlaceScreen';
import BottomTabNavigator from './BottomTabNavigator';
import FavoritePlacesScreen from 'screens/FavoritePlacesScreen';
import PlaceDetailScreen from 'screens/PlaceDetailScreen';
import SettingsScreen from 'screens/SettingsScreen';
import MapScreen from 'screens/MapScreen';
import HeaderLogo from 'components/HeaderLogo';
import Colors from 'utils/colors';
import Fonts from 'utils/fonts';

const MainStackNavigator = createNativeStackNavigator();

const MainNavigator = () => {
  const { t } = useTranslation();

  return (
    <MainStackNavigator.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTitleStyle: {
          fontWeight: '900',
          fontSize: Fonts.size.HeaderTitle,
          color: Colors.Primary,
        },
        headerStyle: {
          backgroundColor: Colors.Surface,
        },
      }}>
      <MainStackNavigator.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{
          title: t('title'),
          headerLeft: HeaderLogo,
        }}
      />
      <MainStackNavigator.Screen
        name="FavoritePlaces"
        component={FavoritePlacesScreen}
        options={{
          title: t('screens.favoritePlaces.title'),
          headerLeft: HeaderLogo,
        }}
      />
      <MainStackNavigator.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}
        options={{
          title: t('screens.placeDetail.title'),
          headerLeft: HeaderLogo,
        }}
      />
      <MainStackNavigator.Screen
        name="EditPlace"
        component={EditPlaceScreen}
        options={{
          headerLeft: HeaderLogo,
        }}
      />
      <MainStackNavigator.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: t('screens.settings.title'),
          headerLeft: HeaderLogo,
        }}
      />
      <MainStackNavigator.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: t('screens.map.title'),
          headerLeft: HeaderLogo,
        }}
      />
    </MainStackNavigator.Navigator>
  );
};
export default MainNavigator;
