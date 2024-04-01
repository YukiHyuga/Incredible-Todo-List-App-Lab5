import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Footer = () => {
  return (
    <Text style={styles.text}>Southern Alberta Institute Of Technology.</Text>
  );
};
const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#333',
        padding: 10,
        alignItems: 'center',
    },
    text: {
        color: '#000',
        textAlign: 'center',
    },
  });
export default Footer;