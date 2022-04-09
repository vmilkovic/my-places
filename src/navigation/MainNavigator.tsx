import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EditPlaceScreen from 'screens/EditPlaceScreen';
import BottomTabNavigator from './BottomTabNavigator';
import FavoritePlacesScreen from 'screens/FavoritePlacesScreen';
import PlaceDetailScreen from 'screens/PlaceDetailScreen';
import SettingsScreen from 'screens/SettingsScreen';
import { Colors } from 'assets';

const MainStackNavigator = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTintColor: Colors.Primary,
      }}>
      <MainStackNavigator.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{
          title: 'My Places',
        }}
      />
      <MainStackNavigator.Screen
        name="FavoritePlaces"
        component={FavoritePlacesScreen}
      />
      <MainStackNavigator.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}
      />
      <MainStackNavigator.Screen name="EditPlace" component={EditPlaceScreen} />
      <MainStackNavigator.Screen name="Settings" component={SettingsScreen} />
    </MainStackNavigator.Navigator>
  );
};
export default MainNavigator;
