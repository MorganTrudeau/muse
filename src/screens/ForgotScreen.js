import React from 'react';
import {Linking, Text, Dimensions, View, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TextInput from '../components/AppTextInput';
import Button from '../components/AppButton';
import global, {colors} from '../styles';
import {connect} from 'react-redux';
import {resetPassword} from '../apis/user';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const HEIGHT = Dimensions.get('window').height;

class ForgotScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.activeUser.resetPasswordResult &&
      this.props.activeUser.resetPasswordResult !==
        nextProps.activeUser.resetPasswordResult
    ) {
      Alert.alert(
        'Password Reset Success',
        `An account recovery email has been sent to ${this.state.email}. `,
      );
    }
    if (
      nextProps.activeUser.resetPasswordError &&
      this.props.activeUser.resetPasswordError !==
        nextProps.activeUser.resetPasswordError
    ) {
      presentAlert(
        'Password Reset Error',
        nextProps.activeUser.resetPasswordError,
      );
    }
  }

  handleSubmit = () => {
    const email = this.state.email.trim();
    if (typeof email === 'string' && email !== '') {
      this.props.resetPassword(this.state.email.trim());
    }
  };

  render() {
    return (
      <LinearGradient colors={['#283a6e', '#465b95']} style={{flex: 1}}>
        <KeyboardAwareScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View
            style={{
              flex: 1,
              padding: 20,
              paddingTop: HEIGHT * 0.1,
              alignItems: 'center',
              width: '100%',
            }}>
            <Text
              style={[
                global.inputHeader,
                {marginBottom: 10, width: '90%', maxWidth: 300},
              ]}>
              Forgot Password?
            </Text>
            <Text
              style={[
                global.textWhite,
                {marginBottom: 10, width: '90%', maxWidth: 300},
              ]}>
              Enter your email below to receive a password reset link.
            </Text>
            <TextInput
              containerStyle={global.inputContainer}
              keyboardType={'email-address'}
              onChangeText={email => this.setState({email})}
              value={this.state.email}
              onSubmitEditing={this.handleSubmit}
            />
            <Button
              title={'Submit'}
              style={{marginVertical: 20}}
              onPress={this.handleSubmit}
              loading={this.props.activeUser.resetPasswordLoading}
            />
            <Text
              style={[
                global.inputHeader,
                {marginTop: 40, width: '90%', maxWidth: 300},
              ]}>
              Other Log-in Issues?
            </Text>
            <Text
              style={[
                global.textWhite,
                {marginBottom: 10, width: '90%', maxWidth: 300},
              ]}>
              we're here to help...
            </Text>
            <Button
              titleStyle={{color: colors.white}}
              style={{
                backgroundColor: colors.secondary,
                alignSelf: 'center',
                marginTop: 20,
              }}
              title={'Contact Us'}
              onPress={() =>
                Linking.openURL('mailto:employeelinkapp@gmail.com')
              }
            />
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    );
  }

  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      headerStyle: {
        backgroundColor: colors.header,
        borderBottomWidth: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    };
  };
}

const mapStateToProps = state => {
  return {activeUser: state.auth};
};

const mapDispatchToProps = dispatch => {
  return {
    resetPassword: email => dispatch(resetPassword(email)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotScreen);
