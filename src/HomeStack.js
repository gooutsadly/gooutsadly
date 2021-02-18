import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import ScanScreen from './screens/ScanScreen';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';

import AppStyles from './AppStyles';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation, route }) => {

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'Home') {
      navigation.setOptions({ tabBarVisible: true });
    } else {
      navigation.setOptions({ tabBarVisible: false });
    }
  }, [navigation, route]);

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
          headerTitleStyle: AppStyles.headerTitleStyle,
          headerTintColor: '#fff', //here I mean that the tintColor will be have that value on the CURRENT(!) screen
          headerStyle: {
            backgroundColor: '#12b187',
          },
          headerTitleAlign: 'center',
          headerBackImage: ({ tintColor }) => <Icon name={'chevron-back-outline'} size={36} color={tintColor} style={{ marginLeft: 8 }} />
        }}
      />
      <HomeStack.Screen
        options={{ headerShown: false, gestureEnabled: false }}
        name="Detail"
        component={DetailScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
