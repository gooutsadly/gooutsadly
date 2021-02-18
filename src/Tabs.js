import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStack';
import { Text, View, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/dist/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function InBoxScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>無訊息</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const InBoxStack = createStackNavigator();

const InBoxStackScreen = () => {
  return (
    <InBoxStack.Navigator>
      <InBoxStack.Screen
        name="InBox"
        component={InBoxScreen}
        options={{
          title: '收件箱',
          headerTitleStyle: styles.headerTitleStyle,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#12b187',
            height: 50
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
          headerTitleStyle: styles.headerTitleStyle,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#12b187',
            height: 50
          },
          headerTitleAlign: 'center',
        }}
      />
    </SettingsStack.Navigator>
  );
};

const Tabs = ({ descriptors, navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarVisible: false }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
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
          return <Text
            style={ focused ? styles.textShadow : {} }
          >
            <Icon name={iconName} size={size} color={color} />
          </Text>;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#12b187',
        inactiveTintColor: 'gray',
        style: { height: 90 },
        iconStyle: { marginTop: 16 },
        labelStyle: { marginBottom: 16, fontSize: 12 },
      }}
    >
      <Tab.Screen name="主頁" component={HomeStackScreen} />
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
  headerTitleStyle: {
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    fontSize: 18
  }
});

export default Tabs;
