import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import global, {colors} from '../styles';
import {auth} from '../apis/user';
import {connect} from 'react-redux';
import Button from '../components/AppButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NavigationActions} from 'react-navigation';

const {width, height} = Dimensions.get('window');
const HEIGHT = height;
const WIDTH = width;

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      textInputFocused: false,
      iapLoading: false,
      loginActive: false,
    };
    console.ignoredYellowBox = ['Setting a timer'];
  }

  async componentDidUpdate(prevProps) {
    const {activeUser} = this.props;
    if (!prevProps.activeUser.loginError && activeUser.loginError) {
      this.setState({loginActive: false});
      Alert.alert('Login Error', activeUser.loginError);
    }
  }

  login = () => {
    const email = this.state.email.trim();
    const password = this.state.password.trim();
    if (!email || email === '') {
      return Alert.alert(
        'Email Incomplete',
        'Please enter a email and password to login. If you do not have an account press sign up below.',
      );
    }
    if (!password || password === '') {
      return Alert.alert(
        'Password Incomplete',
        'Please enter a password to login. If you do not have an account press sign up below.',
      );
    }
    this.setState({loginActive: true});
    this.props.auth(email, password);
  };

  navigateToForgotScreen = () => {
    this.props.navigation.dispatch(
      NavigationActions.navigate({routeName: 'ForgotScreen'}),
    );
  };

  render() {
    return (
      <LinearGradient colors={['#283a6e', '#465b95']} style={{flex: 1}}>
        <KeyboardAwareScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <SafeAreaView style={styles.container}>
            <View
              style={{
                flex: HEIGHT < 667 ? 0.5 : 2,
                padding: 10,
                justifyContent: 'center',
              }}
            />
            <View
              style={{
                flex: 5,
                width: '100%',
                alignItems: 'center',
              }}>
              <View style={global.inputContainer}>
                <Text style={global.inputHeader}>Email</Text>
                <TextInput
                  onSubmitEditing={() => this.passwordInput.focus()}
                  style={[global.text, global.input]}
                  onChangeText={text => this.setState({email: text})}
                  value={this.state.email}
                  keyboardType={'email-address'}
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  returnKeyType={'next'}
                />
              </View>
              <View style={global.inputContainer}>
                <Text style={global.inputHeader}>Password</Text>
                <TextInput
                  ref={r => (this.passwordInput = r)}
                  onSubmitEditing={this.login}
                  style={[global.text, global.input]}
                  onChangeText={text => this.setState({password: text})}
                  value={this.state.password}
                  autoCapitalize={'none'}
                  autoCorrect={false}
                  secureTextEntry={true}
                  underlineColorAndroid="transparent"
                  returnKeyType={'go'}
                />
                <TouchableOpacity onPress={this.navigateToForgotScreen}>
                  <Text
                    style={[
                      global.textSmallWhite,
                      {marginTop: 10, opacity: 0.8},
                    ]}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 20}}>
                <Button
                  onPress={this.login}
                  title={'LOG IN'}
                  loading={this.state.loginActive}
                />
              </View>
            </View>
          </SafeAreaView>
          <SafeAreaView
            style={{
              backgroundColor: colors.primary,
              width: '100%',
            }}>
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.dispatch(
                  NavigationActions.navigate({routeName: 'SignUpScreen'}),
                )
              }
              underlayColor={colors.primaryUnderlay}
              style={{
                padding: 15,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              withBackground={true}>
              <Text style={global.titleWhite}>Sign Up</Text>
            </TouchableHighlight>
          </SafeAreaView>
        </KeyboardAwareScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

const mapStateToProps = state => {
  return {
    activeUser: state.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    auth: (email, password) => dispatch(auth(email, password)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
