import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ShadowText = (props) => {
  return (
    <Text style={{...styles.textShadow, ...props.style}}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  textShadow: {
    textShadowColor: 'rgb(0, 0, 0)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
  },
});

export default ShadowText;
