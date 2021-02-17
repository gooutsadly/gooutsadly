import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ScanScreen from './screens/ScanScreen';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTitle: null,
          headerBackTitle: null, //here I mean that the title will not be shown on the NEXT(!) screen
        }}
      />
      <HomeStack.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          title: '掃描二維碼',
          headerTitleStyle: {
            color: '#fff',
          },
          headerTintColor: '#fff', //here I mean that the tintColor will be have that value on the CURRENT(!) screen
          headerStyle: {
            backgroundColor: '#12b187',
          },
        }}
      />
      <HomeStack.Screen
        options={{headerShown: false, gestureEnabled: false}}
        name="Detail"
        component={DetailScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
