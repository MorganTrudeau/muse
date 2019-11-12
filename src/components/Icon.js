import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import global, {colors} from '../styles';

const Icon = ({asset, iconStyle, tint, size, onPress, containerStyle}) => {
  const Container = onPress ? TouchableOpacity : View;
  return (
    <View style={containerStyle}>
      <Container onPress={onPress}>
        <Image
          source={asset}
          style={{
            height: size,
            width: size,
            tintColor: tint || colors.icon,
            ...iconStyle,
          }}
          resizeMode={'contain'}
        />
      </Container>
    </View>
  );
};

export default Icon;
