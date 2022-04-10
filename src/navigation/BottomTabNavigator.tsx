import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';

import ListPlacesScreen from 'screens/ListPlacesScreen';
import AddPlaceScreen from 'screens/AddPlaceScreen';
import ProfileScreen from 'screens/ProfileScreen';
import Colors from 'utils/colors';
import Fonts from 'utils/fonts';

const BottomTab = createMaterialBottomTabNavigator();

const { TabIcon: TabIconSize } = Fonts.size;
const {
  PrimaryDark: PrimaryDarkColor,
  Dark: TabInactiveColor,
  Background: BackgroundColor,
} = Colors;

const styles = StyleSheet.create({
  bar: {
    backgroundColor: BackgroundColor,
  },
});

function BottomTabNavigator() {
  const { t } = useTranslation();

  return (
    <BottomTab.Navigator
      initialRouteName="PlacesListTab"
      activeColor={PrimaryDarkColor}
      inactiveColor={TabInactiveColor}
      barStyle={styles.bar}>
      <BottomTab.Screen
        name="PlacesListTab"
        component={ListPlacesScreen}
        options={{
          tabBarLabel: t('tabs.places'),
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="room" color={color} size={TabIconSize} />
          ),
        }}
      />
      <BottomTab.Screen
        name="AddPlaceTab"
        component={AddPlaceScreen}
        options={{
          tabBarLabel: t('tabs.addPlace'),
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
          tabBarLabel: t('tabs.profile'),
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
