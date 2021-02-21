import React from 'react';

import {Image, Linking, StyleSheet, TouchableOpacity} from 'react-native';

import {FlatList, Text, View} from 'react-native';

const refreshIcon = require('../../images/app_assets_icon_refresh.png');
const arrowRightIcon = require('../../images/app_assets_icon_calendar_arrow_right.png');

const SettingsScreen = () => {
  return (
    <View style={styles.view}>
      <FlatList
        data={[
          {
            key: '每日更新',
            helper: '最後更新2021-02-18 16:52:53',
            icon: refreshIcon,
          },
          {key: '語言', icon: arrowRightIcon},
          {key: '出行記錄', icon: arrowRightIcon},
          {key: '個人資料收集聲明', icon: arrowRightIcon},
          {key: '私隱政策', icon: arrowRightIcon},
          {key: '條款及細則', icon: arrowRightIcon},
          {key: '歡迎使用安心出行', icon: arrowRightIcon},
          {key: '關於', link: '安心出行', right: '版本 1.1.5'},
        ]}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        style={styles.listContainer}
        renderItem={({item, index}) => (
          <TouchableOpacity disabled={index === 0 || Boolean(item.link)}>
            <View style={styles.listItem}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.item}>{item.key}</Text>
                  {item.link && (
                    <Text
                      style={styles.linkItem}
                      onPress={() =>
                        Linking.openURL('https://www.leavehomesafe.gov.hk')
                      }>
                      {item.link}
                    </Text>
                  )}
                </View>

                {item.helper && (
                  <Text style={{color: '#aaa', fontSize: 12, marginTop: 5}}>
                    {item.helper}
                  </Text>
                )}
              </View>
              <View>
                {item.icon && (
                  <Image
                    source={item.icon}
                    resizeMode={'stretch'}
                    style={{width: 24, height: 24}}
                  />
                )}
                {item.right && <Text>{item.right}</Text>}
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
    marginTop: 20,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#e1e8ee',
  },
  listItem: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkItem: {
    marginLeft: 3,
    fontWeight: 'bold',
    color: '#12b187',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
});

export default SettingsScreen;
