import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import ListPlacesScreen from 'screens/ListPlacesScreen';
import AddPlaceScreen from 'screens/AddPlaceScreen';
import ProfileScreen from 'screens/ProfileScreen';

import { Colors, Fonts } from 'assets';

const BottomTab = createMaterialBottomTabNavigator();

const { TabIcon: TabIconSize } = Fonts.size;
const {
  Primary: PrimaryColor,
  Text: TextColor,
  Background: BackgroundColor,
} = Colors;

const styles = StyleSheet.create({
  bar: {
    backgroundColor: BackgroundColor,
  },
});

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="PlacesListTab"
      activeColor={PrimaryColor}
      inactiveColor={TextColor}
      barStyle={styles.bar}>
      <BottomTab.Screen
        name="PlacesListTab"
        component={ListPlacesScreen}
        options={{
          tabBarLabel: 'Places',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="room" color={color} size={TabIconSize} />
          ),
        }}
      />
      <BottomTab.Screen
        name="AddPlaceTab"
        component={AddPlaceScreen}
        options={{
          tabBarLabel: 'Add Place',
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="add-location"
              color={color}
              size={TabIconSize}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="account-box"
              color={color}
              size={TabIconSize}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
