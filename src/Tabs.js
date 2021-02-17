import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStack';
import {Text, View} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tabs = ({descriptors, navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{tabBarVisible: false}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case '主頁':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case '收件箱':
              iconName = focused ? 'mail' : 'mail-outline';
              break;
              case '設定':
              iconName = focused ? 'settings' : 'settings-outline';
              break;
            default:
              iconName = focused ? 'home' : 'home-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#12b187',
        inactiveTintColor: 'gray',
        style: { height: 80 },
        iconStyle: { marginTop: 16 },
        labelStyle: { marginBottom: 16 }
      }}
    >
      <Tab.Screen name="主頁" component={HomeStackScreen} />
      <Tab.Screen name="收件箱" component={SettingsScreen} />
      <Tab.Screen name="設定" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
