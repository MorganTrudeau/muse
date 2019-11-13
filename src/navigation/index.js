import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import {connect} from 'react-redux';
import {colors} from '../styles';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Dimensions, Image} from 'react-native';
import NavigationService from './NavigationService';
// import NativeSplashScreen from "../utils/splashScreen";
import global from '../styles';
import Tabs from './Tabs';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotScreen from '../screens/ForgotScreen';

const WIDTH = Dimensions.get('window').width;

const wrapInStackNavigator = (displayName, component) =>
  createStackNavigator(
    {
      [displayName]: {screen: component},
    },
    {
      cardStyle: {backgroundColor: colors.primary},
      headerMode: 'screen',
      defaultNavigationOptions: ({navigation, screenProps}) => {
        if (screenProps.tutorialActive || !screenProps.connected) {
          return {
            headerBackTitle: null,
            headerForceInset: {
              top: 'never',
            },
          };
        } else {
          return {
            headerBackTitle: null,
          };
        }
      },
    },
  );

const navigationOptions = (icon, id) => ({
  headerLeft: null,
  tabBarVisible: true,
  tabBarIcon: ({focused, tintColor}) => (
    <Image
      source={icon}
      resizeMode={'contain'}
      style={{
        tintColor: tintColor,
        height: 22,
        width: 22,
        bottom: 0,
        opacity: 1,
      }}
    />
  ),
});

class AppNavigation extends React.Component {
  navigationStack = null;

  componentWillMount() {
    this.initNavigator(this.props);
  }

  componentDidMount() {
    // setTimeout(() => NativeSplashScreen.hide(), 10);
  }

  componentDidUpdate(prevProps) {}

  initNavigator = props => {
    const MainStack = createStackNavigator(
      {
        Tabs: {
          screen: Tabs,
          navigationOptions: {header: null},
        },
      },
      {
        cardStyle: {backgroundColor: colors.bg},
        initialRouteName: 'Tabs',
        headerMode: 'screen',
      },
    );

    const AuthStack = createStackNavigator(
      {
        LoginScreen: {
          screen: LoginScreen,
          navigationOptions: {header: null},
        },
        SignUpScreen: {
          screen: SignUpScreen,
        },
        ForgotScreen: {
          screen: ForgotScreen,
        },
      },
      {
        cardStyle: {backgroundColor: colors.bg},
        initialRouteName: 'LoginScreen',
        headerMode: 'screen',
      },
    );

    let initialRouteName = 'MainStack';

    // if (props.firebaseAuth === 'INACTIVE' || props.firebaseAuth === null) {
    //   initialRouteName = 'AuthStack';
    // }
    // if (props.firebaseAuth === 'ACTIVE') {
    //   initialRouteName = 'MainStack';
    // }

    const switchNavigator = createSwitchNavigator(
      {
        AuthStack,
        MainStack,
      },
      {
        initialRouteName,
        headerMode: 'screen',
      },
    );

    this.navigationStack = createAppContainer(switchNavigator);
    return this.forceUpdate();
  };

  render() {
    const NavigationStack = this.navigationStack;
    const {tutorialActive, connected} = this.props;
    return (
      <NavigationStack
        screenProps={{connected}}
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

const mapState = state => {
  return {
    firebaseAuth: state.auth.firebaseAuth,
    activeUser: state.auth.data,
    connected: state.network.connected,
  };
};

export default connect(mapState)(AppNavigation);
