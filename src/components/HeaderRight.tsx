import React from 'react';
import { View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HeaderRight = props => {
  return (
    <View>
      <MaterialIcons {...props} />
    </View>
  );
};

export default HeaderRight;
