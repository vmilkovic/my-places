import React from 'react';
import { Image, StyleSheet } from 'react-native';

const HeaderLogo = () => {
  return (
    <Image
      style={styles.logo}
      source={require('../assets/images/vm-logo.png')}
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 25,
    height: 25,
    marginRight: 20,
  },
});

export default HeaderLogo;
