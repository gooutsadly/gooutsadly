import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import InboxScreen from './screens/InboxScreen';
import SettingsScreen from './screens/SettingsScreen';

import AppStyles from './AppStyles';

const homeIcon = require('../images/app_assets_tabicons_icon_home.png');
const homeSelectedIcon = require('../images/app_assets_tabicons_icon_home_selected.png');
const inboxIcon = require('../images/app_assets_tabicons_icon_inbox.png');
const inboxSelectedIcon = require('../images/app_assets_tabicons_icon_inbox_selected.png');
const settingsIcon = require('../images/app_assets_tabicons_icon_settings.png');
const settingsSelectedIcon = require('../images/app_assets_tabicons_icon_settings_selected.png');

const Tab = createBottomTabNavigator();

const InBoxStack = createStackNavigator();

const InBoxStackScreen = () => {
  return (
    <InBoxStack.Navigator>
      <InBoxStack.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          title: '收件箱',
          headerTitleStyle: AppStyles.headerTitleStyle,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#12b187',
            // height: 50,
          },
          headerTitleAlign: 'center',
        }}
      />
    </InBoxStack.Navigator>
  );
};

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: '設定',
          headerTitleStyle: AppStyles.headerTitleStyle,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#12b187',
            // height: 50,
          },
          headerTitleAlign: 'center',
        }}
      />
    </SettingsStack.Navigator>
  );
};

const Tabs = ({descriptors, navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon;
          switch (route.name) {
            case '主頁':
              icon = focused ? homeSelectedIcon : homeIcon;
              break;
            case '收件箱':
              icon = focused ? inboxSelectedIcon : inboxIcon;
              break;
            case '設定':
              icon = focused ? settingsSelectedIcon : settingsIcon;
              break;
            default:
              icon = focused ? homeSelectedIcon : homeIcon;
          }
          // You can return any component that you like here!
          return (
            <Image
              source={icon}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#12b187',
        inactiveTintColor: 'gray',
        style: {height: ifIphoneX(120, 90)},
        iconStyle: {marginTop: 16},
        labelStyle: {marginBottom: 16, fontSize: 12},
      }}>
      <Tab.Screen name="主頁" component={HomeScreen} />
      <Tab.Screen name="收件箱" component={InBoxStackScreen} />
      <Tab.Screen name="設定" component={SettingsStackScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
