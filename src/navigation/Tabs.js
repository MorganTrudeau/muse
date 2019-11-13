import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import ProfileScreen from '../screens/ProfileScreen';
import global, {colors} from '../styles';
import TabBar from '../components/TabBar';

const wrapInStackNavigator = (displayName, component) =>
  createStackNavigator(
    {
      [displayName]: {screen: component},
    },
    {
      cardStyle: {backgroundColor: colors.bg},
      headerMode: 'screen',
      defaultNavigationOptions: ({navigation, screenProps}) => {
        return {
          header: null,
          cardStyle: {backgroundColor: colors.primary},
          headerBackTitle: null,
        };
      },
    },
  );

const navigationOptions = icon => ({
  headerLeft: null,
  tabBarVisible: true,
  tabBarIcon: ({focused, tintColor}) => (
    <Image
      source={icon}
      resizeMode={'contain'}
      style={{
        tintColor: tintColor,
        height: 21,
        width: 21,
      }}
    />
  ),
});

export default createBottomTabNavigator(
  {
    ['Profile']: {
      screen: wrapInStackNavigator('WorkDaysScreen', ProfileScreen),
      navigationOptions: navigationOptions(require('../assets/img/user.png')),
    },
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: colors.tabIconActive,
      inactiveTintColor: colors.tabIconInactive,
      allowFontScaling: false,
      labelStyle: global.tabText,
      style: {
        backgroundColor: colors.tabBarBg,
      },
    },
  },
);
