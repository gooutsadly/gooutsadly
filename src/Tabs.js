import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import InboxScreen from './screens/InboxScreen';
import SettingsScreen from './screens/SettingsScreen';

import AppStyles from './AppStyles';

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
          return (
            <Text style={focused ? styles.textShadow : {}}>
              <Icon name={iconName} size={size} color={color} />
            </Text>
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

const styles = StyleSheet.create({
  textShadow: {
    // textShadowColor: 'rgba(0, 0, 0, 0.5)',
    // textShadowOffset: { width: 0, height: 1 },
    // textShadowRadius: 5
  },
});

export default Tabs;
