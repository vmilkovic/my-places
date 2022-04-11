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
    <View style={styles.touchable}>
      <TouchableComponent onPress={onPress}>
        <View style={{ ...styles.imageContainer, ...imageContainerStyle }}>
          <Image style={{ ...styles.image, ...imageStyle }} source={source} />
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderColor: Colors.Accent,
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
  },
  imageContainer: {
    backgroundColor: Colors.Surface,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 300,
  },
});

export default TouchableImage;
