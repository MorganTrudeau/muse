import React from 'react';
import {View, ActivityIndicator, Text, TouchableHighlight} from 'react-native';
import global, {colors} from '../styles';
import Icon from './Icon';

const AppButton = ({
  title,
  titleStyle,
  loading,
  onPress,
  style,
  containerStyle,
  spinnerColor = '#283a6e',
  underlayColor = colors.lightGreyUnderlay,
  id,
  eventOnPress,
  color,
  alwaysAnimating,
  icon,
  iconSize,
  iconColor,
  iconStyle,
}) => (
  <TouchableHighlight
    underlayColor={underlayColor}
    onPress={!loading ? onPress : null}
    style={[global.button, style]}
    color={color}
    alwaysAnimating={alwaysAnimating}
    containerStyle={containerStyle}>
    <View
      style={{
        width: '100%',
        zIndex: 1000,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {!!icon && (
        <Icon
          asset={icon}
          tint={iconColor}
          size={iconSize}
          style={{marginRight: 15, ...iconStyle}}
        />
      )}
      <Text allowFontScaling={false} style={[global.buttonText, titleStyle]}>
        {title}
      </Text>

      {loading ? (
        <View style={{position: 'absolute', right: 5}}>
          <ActivityIndicator
            size={'small'}
            animating={true}
            color={spinnerColor}
          />
        </View>
      ) : null}
    </View>
  </TouchableHighlight>
);

export default AppButton;
