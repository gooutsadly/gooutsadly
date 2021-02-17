import React from 'react';

import {StyleSheet} from 'react-native';

import {Text, View, Image, TouchableOpacity} from 'react-native';
import {DateTime} from 'luxon';

const DetailScreen = ({navigation, route}) => {
  const {name} = route?.params || {};
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={goBack}>
        <Image
          source={require('../../images/cross.png')}
          style={styles.crossImage}
        />
      </TouchableOpacity>
      <Text style={styles.normalText}>你已進入場所</Text>
      <Text style={styles.locationText}>{name}</Text>
      <Text style={styles.normalText}>
        {DateTime.local().toFormat('yyyy-MM-dd HH:mm')}
      </Text>
      <Image
        source={require('../../images/tick.png')}
        style={styles.tickImage}
      />
      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={goBack}
          style={styles.leaveButton}
          title="離開">
          <Text style={styles.leaveText}>離開</Text>
        </TouchableOpacity>
        <Text style={styles.helperText}>當你離開時請緊記按"離開"</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
  helperText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#fff',
  },
  leaveButton: {
    marginRight: 60,
    marginLeft: 60,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#fed426',
    borderRadius: 48,
  },
  leaveText: {
    fontSize: 20,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  view: {
    backgroundColor: '#12b187',
    flex: 1,
  },
  normalText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 10,
  },
  locationText: {
    fontSize: 24,
    textAlign: 'center',
    color: '#fed426',
    marginBottom: 10,
  },
  tickImage: {
    width: 226 / 2,
    height: 226 / 2,
    alignSelf: 'center',
    marginTop: 50,
  },
  crossImage: {
    alignSelf: 'flex-end',
    width: 168 / 1.5,
    height: 138 / 1.5,
    marginTop: 5,
  },
});

export default DetailScreen;
