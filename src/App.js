/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import ScanScreen from './screens/ScanScreen';
import DetailScreen from './screens/DetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import AppStyles from './AppStyles';
import Tabs from './Tabs';

import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Scan"
          component={ScanScreen}
          options={{
            title: '掃描二維碼',
            headerTitleStyle: AppStyles.headerTitleStyle,
            headerTintColor: '#fff', //here I mean that the tintColor will be have that value on the CURRENT(!) screen
            headerStyle: {
              backgroundColor: '#12b187',
            },
            headerTitleAlign: 'center',
            headerBackImage: ({tintColor}) => (
              <Icon
                name={'chevron-back-outline'}
                size={36}
                color={tintColor}
                style={{marginLeft: 8}}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{headerShown: false, gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
