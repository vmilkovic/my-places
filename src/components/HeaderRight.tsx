import React from 'react';
import { View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { HeaderRightProps } from 'utils/types';

const HeaderRight = (props: HeaderRightProps) => {
  return (
    <View>
      <MaterialIcons {...props} />
    </View>
  );
};

export default HeaderRight;
