import React from 'react';

import {StyleSheet} from 'react-native';

import {Text, View, ScrollView, Image} from 'react-native';
import {DateTime} from 'luxon';
import Menu from '../components/menu';
import ShadowText from '../components/shadowText';

const DateGreeting = () => {
  const date = DateTime.local().setLocale('zh-HK').toFormat('yyyy-MM-dd, cccc');

  return (
    <View style={styles.dateGreeting}>
      <ShadowText style={{color: '#FFF'}}>{date}</ShadowText>
      <ShadowText style={{color: '#FFF', marginTop: 15, fontSize: 30}}>
        記錄你的到訪
      </ShadowText>
    </View>
  );
};

const HomeScreen = ({navigation, route}) => {
  const DATE = DateTime.local().setLocale('zh-HK').toFormat('yyyy-MM-dd');
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
              <View style={styles.noticeImageView}>
                <Image
                  source={require('../../images/fake_home_buttom_notice.png')}
                  style={styles.noticeImage}
                />
                <Text
                  style={{
                    position: 'absolute',
                    top: 15,
                    left: '5.3%',
                    fontSize: 11,
                  }}>
                  {`最後更新 ${DATE}`}
                </Text>
              </View>
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
  },
  noticeImageView: {
    width: '85%',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginRight: 20,
    marginLeft: 20,
    overflow: 'hidden',
  },
  noticeImage: {
    width: '100%',
    height: 100,
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
