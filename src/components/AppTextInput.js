import React from 'react';
import {View, TextInput, Text} from 'react-native';
import global, {colors} from '../styles';

class AppTextInput extends React.Component<Props> {
  render() {
    const {headerText, containerStyle, style, ...props} = this.props;
    return (
      <View style={containerStyle}>
        {headerText && <Text style={global.inputHeader}>{headerText}</Text>}
        <TextInput {...props} style={[global.text, global.input, style]} />
      </View>
    );
  }
}

export default AppTextInput;
