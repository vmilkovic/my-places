import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import EditPlaceScreen from 'screens/EditPlaceScreen';
import BottomTabNavigator from './BottomTabNavigator';
import FavoritePlacesScreen from 'screens/FavoritePlacesScreen';
import PlaceDetailScreen from 'screens/PlaceDetailScreen';
import SettingsScreen from 'screens/SettingsScreen';
import HeaderLogo from 'components/HeaderLogo';
import Colors from 'utils/colors';

const MainStackNavigator = createNativeStackNavigator();

const MainNavigator = () => {
  const { t } = useTranslation();

  return (
    <MainStackNavigator.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTintColor: Colors.Primary,
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
      <MainStackNavigator.Screen name="EditPlace" component={EditPlaceScreen} />
      <MainStackNavigator.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: t('screens.settings.title'),
          headerLeft: HeaderLogo,
        }}
      />
    </MainStackNavigator.Navigator>
  );
};
export default MainNavigator;
