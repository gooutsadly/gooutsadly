import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {DateTime} from 'luxon';
import CheckBox from 'react-native-just-checkbox';
import ShadowText from '../components/shadowText';
import styled from 'styled-components/native';

const DetailScreen = ({navigation, route}) => {
  const {name} = route?.params || {};
  const [isChecked, setIsChecked] = useState(false);
  const goBack = () => {
    navigation.navigate('Home', {withBall: true});
  };

  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={goBack}>
        <Image
          source={require('../../images/cross.png')}
          style={styles.crossImage}
        />
      </TouchableOpacity>
      <ShadowText style={styles.normalText}>你已進入場所</ShadowText>
      <ShadowText style={styles.locationText}>{name}</ShadowText>
      <ShadowText style={styles.normalText}>
        {DateTime.local().toFormat('yyyy-MM-dd HH:mm')}
      </ShadowText>
      <Image
        source={require('../../images/tick.png')}
        style={styles.tickImage}
      />
      <View style={styles.bottom}>
        {
          Platform.OS === 'ios'
            ?
            <Image
              source={require('../../images/fake_checkbox.jpg')}
              style={styles.checkBox}
            />
            :
            <View style={{
              alignItems: 'center',
              marginBottom: 10,
            }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '75%',
                color: '#fff',
              }}>
                <CheckBox
                  isChecked={isChecked}
                  checkBoxSize={45}
                  checkColor='#fff'
                  squareCheckBox={true}
                  onToggle={setIsChecked}
                />
                <ShadowText
                  style={{
                    marginLeft: 4,
                    color: '#fff',
                    fontSize: 12
                  }}
                >
                  4小時後自動離開
                </ShadowText>
                <ShadowText
                  style={{
                    flex: 1,
                    textAlign: 'right',
                    color: '#fff',
                    fontSize: 12
                  }}
                >
                  變更
                </ShadowText>
              </View>
            </View>
        }
        <LeaveButton onPress={goBack} style={styles.leaveButton} title="離開">
          <Text style={styles.leaveText}>離開</Text>
        </LeaveButton>
        <ShadowText style={styles.helperText}>
          當你離開時請緊記按"離開"
        </ShadowText>
      </View>
    </View>
  );
};

const LeaveButton = styled(TouchableOpacity)`
  margin-right: 60px;
  margin-left: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #fed426;
  border-radius: 48px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.5);
`;

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
  checkBox: {
    width: '100%',
    height: 135 / 2,
    marginBottom: 10,
  },
});

export default DetailScreen;
