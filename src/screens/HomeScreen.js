import React from 'react';

import {StyleSheet} from 'react-native';

import {Text, View, ScrollView, Image} from 'react-native';
import {DateTime} from 'luxon';
import Menu from '../components/menu';

const DateGreeting = () => {
  const date = DateTime.local().setLocale('zh-HK').toFormat('yyyy-MM-dd, cccc');

  return (
    <View style={styles.dateGreeting}>
      <Text style={{color: '#FFF'}}>{date}</Text>
      <Text style={{color: '#FFF', marginTop: 15, fontSize: 30}}>
        記錄你的到訪
      </Text>
    </View>
  );
};

const HomeScreen = ({navigation, route}) => {
  return (
    <ScrollView
      style={styles.view}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between',
      }}>
      <View style={styles.view}>
        <DateGreeting />
        <View style={styles.contentView}>
          <View style={styles.menuView}>
            <Menu navigation={navigation} />
            <View style={styles.imageContainer}>
              <Image
                source={require('../../images/fake_home_buttom_notice.png')}
                style={{
                  width: '80%',
                  height: 100,
                  marginRight: 20,
                  marginLeft: 20,
                  borderRadius: 20,
                }}
              />
              <Text style={{position: 'absolute', top: 10, left: 48}}>
                {DateTime.local().setLocale('zh-HK').toFormat('yyyy-MM-dd')}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#12b187',
    flex: 1,
  },
  contentView: {
    marginTop: 100,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    backgroundColor: '#FFF',
    flex: 1,
  },
  menuView: {
    marginTop: -50,
    // marginLeft: -30,
    // marginRight: -30,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  dateGreeting: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 65,
  },
});

export default HomeScreen;
