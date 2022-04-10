import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import Colors from 'utils/colors';

import type { TouchableImageProps } from 'utils/types';

const TouchableImage = (props: TouchableImageProps) => {
  const { onPress, source, imageContainerStyle, imageStyle } = props;

  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <TouchableComponent onPress={onPress}>
      <View style={{ ...styles.imageContainer, ...imageContainerStyle }}>
        <Image style={{ ...styles.image, ...imageStyle }} source={source} />
      </View>
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderWidth: 1,
    borderColor: Colors.Accent,
    borderRadius: 20,
    backgroundColor: Colors.Surface,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'center',
  },
});

export default TouchableImage;
