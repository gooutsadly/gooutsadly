import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  Platform,
  StyleSheet,
} from 'react-native';
import {DateTime} from 'luxon';
import Menu from '../components/menu';
import ShadowText from '../components/shadowText';
import moment from 'moment';
import 'moment/locale/zh-hk';
import styled from 'styled-components/native';

const DateGreeting = () => {
  // const date = DateTime.local().setLocale('zh-HK').toFormat('yyyy-MM-dd, cccc');
  const date = moment().locale('zh-hk').format('yyyy-MM-DD, dddd');

  return (
    <View style={styles.dateGreeting}>
      <ShadowText style={styles.greetingDate}>{date}</ShadowText>
      <ShadowText style={styles.greetingText}>記錄你的到訪</ShadowText>
    </View>
  );
};

const HomeScreen = ({navigation, route}) => {
  const DATE = DateTime.local().setLocale('zh-HK').toFormat('yyyy-MM-dd');
  const SPACER_SIZE = 1000; //arbitrary size
  const isIos = Platform.OS === 'ios';
  const TOP_COLOR = '#12b187';
  const BOTTOM_COLOR = '#fff';

  // FYR: https://stackoverflow.com/questions/40366080/2-different-background-colours-for-scrollview-bounce
  return (
    <ScrollView
      style={{backgroundColor: isIos ? BOTTOM_COLOR : TOP_COLOR}}
      contentContainerStyle={{backgroundColor: TOP_COLOR}}
      contentInset={{top: -SPACER_SIZE}}
      contentOffset={{y: SPACER_SIZE}}>
      {isIos && <View style={{height: SPACER_SIZE}} />}
      <View style={styles.view}>
        <DateGreeting />
        <StyledContentView>
          <View style={styles.menuView}>
            <Menu navigation={navigation} />
            <View style={styles.imageContainer}>
              <View style={styles.noticeImageView}>
                <Image
                  source={require('../../images/fake_home_buttom_notice.png')}
                  style={styles.noticeImage}
                />
                <Text style={styles.lastUpdate}>{`最後更新 ${DATE}`}</Text>
              </View>
            </View>
          </View>
        </StyledContentView>
      </View>
    </ScrollView>
  );
};

const StyledContentView = styled(View)`
  margin-top: ${Platform.os === 'ios' ? '100px' : '80px'};
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
  background-color: #fff;
  flex: 1;
  box-shadow: 0px -1px 2px rgba(205, 205, 205, 0.5);
`;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  menuView: {
    marginTop: Platform.os === 'ios' ? -70 : -60,
  },
  noticeImageView: {
    width: '85%',
    borderRadius: 5,
    elevation: 5,
    marginRight: 20,
    marginLeft: 20,
    overflow: 'hidden',
    marginBottom: 100,
  },
  noticeImage: {
    width: '100%',
    height: 100,
    shadowColor: '#000',
    // shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.75,
    shadowRadius: 4,
    // shadowColor: 'red',
    shadowOffset: {height: 1, width: 0},
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  dateGreeting: {
    paddingLeft: Platform.os === 'ios' ? 30 : 24,
    paddingRight: 30,
    marginTop: Platform.os === 'ios' ? 65 : 18,
  },
  greetingDate: {
    color: '#FFF',
    fontSize: Platform.OS === 'ios' ? 14 : 12,
  },
  greetingText: {
    color: '#FFF',
    marginTop: Platform.OS === 'ios' ? 15 : 6,
    fontSize: Platform.OS === 'ios' ? 30 : 24,
  },
  lastUpdate: {
    position: 'absolute',
    top: 15,
    left: '5.3%',
    fontSize: 11,
  },
});

export default HomeScreen;
