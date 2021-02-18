import React from 'react';

import {StyleSheet, TouchableOpacity} from 'react-native';

import {FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
  return (
    <View style={styles.view}>
      <FlatList
        data={[
          {
            key: '每日更新',
            helper: '最後更新2021-02-18 16:52:53',
            icon: 'refresh-outline',
          },
          {key: '語言', icon: 'chevron-forward-outline'},
          {key: '出行記錄', icon: 'chevron-forward-outline'},
          {key: '個人資料收集聲明', icon: 'chevron-forward-outline'},
          {key: '私隱政策', icon: 'chevron-forward-outline'},
          {key: '條款及細則', icon: 'chevron-forward-outline'},
          {key: '歡迎使用安心出行', icon: 'chevron-forward-outline'},
          {key: '關於安心出行', right: '版本 1.1.5'},
        ]}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        style={styles.listContainer}
        renderItem={({item}) => (
          <TouchableOpacity>
            <View style={styles.listItem}>
              <View>
                <Text style={styles.item}>{item.key}</Text>
                {item.helper && <Text>{item.helper}</Text>}
              </View>
              <View>
                {item.icon && <Icon name={item.icon} size={36} />}
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
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    paddingRight: 50,
    paddingLeft: 50,
    marginTop: 30,
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
});

export default SettingsScreen;
