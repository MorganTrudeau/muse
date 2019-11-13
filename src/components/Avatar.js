import React from 'react';
import global from '../styles';
import {TouchableWithoutFeedback, View, Image} from 'react-native';

const Avatar = ({user, onPress, size}) => {
  const Container = onPress ? TouchableWithoutFeedback : View;
  const source = user.avatar
    ? {uri: user.avatar}
    : require('../assets/img/default-avatar.png');
  return (
    <Container
      key={user.id}
      style={[
        global.avatar,
        size && {height: size, width: size, borderRadius: size / 2},
      ]}
      onPress={() => {
        onPress(user);
      }}>
      <Image source={source} style={{width: size, height: size}} />
    </Container>
  );
};

export default Avatar;
