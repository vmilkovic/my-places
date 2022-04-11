import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import { GOOGLE_MAPS_API_KEY } from '@env';

import { GOOGLE_STATIC_MAP_URL } from 'utils/constants';

const MapPreview = (props: any) => {
  let imagePreviewUrl;

  if (props.location) {
    imagePreviewUrl = `${GOOGLE_STATIC_MAP_URL}?center=${props.location.latitude},${props.location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.location.latitude},${props.location.longitude}&key=${GOOGLE_MAPS_API_KEY}`;
  }

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ ...styles.mapPreview, ...props.style }}>
      {props.location ? (
        <Image style={styles.mapImage} source={{ uri: imagePreviewUrl }} />
      ) : (
        props.children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
});

export default MapPreview;
