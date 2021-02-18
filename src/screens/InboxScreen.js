import React from 'react';

import {StyleSheet} from 'react-native';

import {Text, View} from 'react-native';

const InboxScreen = () => {
  return (
    <View style={styles.view}>
      <Text>無信息</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InboxScreen;
