import React from 'react';
import {StyleSheet, Text, View, Alert, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {signUp} from '../apis/user';
import global, {colors} from '../styles';
import {connect} from 'react-redux';
import Button from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const HEIGHT = Dimensions.get('window').height;
const INPUT_CONTAINER_HEIGHT = Math.max(HEIGHT / 7, 90);

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      displayName: '',
    };
    this.signUpUser = this.signUpUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {activeUser} = nextProps;
    if (!this.props.activeUser.signUpError && activeUser.signUpError) {
      Alert.alert('Sign Up Error', activeUser.signUpError);
    }
  }

  goBack() {
    this.props.navigation.pop();
  }

  signUpUser() {
    const email = this.state.email.trim();
    const confirmPassword = this.state.confirmPassword;
    const password = this.state.password;
    if (email === '' || confirmPassword === '' || password === '') {
      return Alert.alert(
        'Sign Up Incomplete',
        'Complete all fields before signing up',
      );
    }
    if (confirmPassword === password) {
      this.props.signUp(email, password);
    } else {
      Alert.alert('Sign up failure', 'Passwords do not match');
    }
  }

  onEmailInputSubmit = () => this.passwordInput.focus();
  onEmailInputChangeText = email => this.setState({email});

  setPasswordInputRef = r => (this.passwordInput = r);
  onPasswordInputSubmit = () => this.confirmPasswordInput.focus();
  onPasswordInputChangeText = password => this.setState({password});

  setConfirmPasswordInputRef = r => (this.confirmPasswordInput = r);
  onConfirmPasswordInputChangeText = confirmPassword =>
    this.setState({confirmPassword});

  render() {
    return (
      <LinearGradient colors={['#283a6e', '#465b95']} style={{flex: 1}}>
        <KeyboardAwareScrollView
          contentContainerStyle={{flexGrow: 0.5}}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.content}>
            <View style={[global.inputContainer, styles.inputContainer]}>
              <Text style={global.inputHeader}>Email</Text>
              <AppTextInput
                id={'sign-up-screen-email-input'}
                onSubmitEditing={this.onEmailInputSubmit}
                style={[global.text, global.input]}
                keyboardType={'email-address'}
                onChangeText={this.onEmailInputChangeText}
                value={this.state.email}
                autoCapitalize={'none'}
                autoCorrect={false}
                underlineColorAndroid="transparent"
                returnKeyType={'next'}
              />
            </View>

            <View style={[global.inputContainer, styles.inputContainer]}>
              <Text style={global.inputHeader}>Password</Text>
              <AppTextInput
                id={'sign-up-screen-password-input'}
                innerRef={this.setPasswordInputRef}
                onSubmitEditing={this.onPasswordInputSubmit}
                style={[global.text, global.input]}
                onChangeText={this.onPasswordInputChangeText}
                value={this.state.password}
                autoCapitalize={'none'}
                autoCorrect={false}
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                returnKeyType={'next'}
              />
            </View>

            <View style={[global.inputContainer, styles.inputContainer]}>
              <Text style={global.inputHeader}>Confirm Password</Text>
              <AppTextInput
                id={'sign-up-screen-confirm-password-input'}
                innerRef={this.setConfirmPasswordInputRef}
                onSubmitEditing={this.signUpUser}
                style={[global.text, global.input]}
                onChangeText={this.onConfirmPasswordInputChangeText}
                value={this.state.confirmPassword}
                autoCapitalize={'none'}
                autoCorrect={false}
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                returnKeyType={'go'}
              />
            </View>

            <View style={{marginTop: 40}}>
              <Button
                id={'sign-up-screen-sign-up-button'}
                title={'SIGN UP'}
                onPress={this.signUpUser}
                loading={this.props.activeUser.isLoading}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    );
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerStyle: global.header,
      headerTintColor: '#fff',
    };
  };
}

const styles = StyleSheet.create({
  inputContainer: {
    height: INPUT_CONTAINER_HEIGHT,
    justifyContent: 'center',
    marginVertical: 0,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {
    activeUser: state.auth,
    signUpSuccess: state.auth.signUpSuccess,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: (email, password) => dispatch(signUp(email, password)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpScreen);
