import React from 'react';
import {View} from 'react-native';
import Icon from '../components/Icon';
import global, {colors} from '../styles';

const MusicControls = ({
  isPlaying,
  play,
  pause,
  skipPrevious,
  skipNext,
  style,
}) => {
  const playPauseIcon = isPlaying
    ? require('../assets/img/pause.png')
    : require('../assets/img/play.png');
  const playPauseAction = isPlaying ? pause : play;
  return (
    <View style={[global.row, style]}>
      <Icon
        asset={require('../assets/img/skip-back.png')}
        size={40}
        tint={colors.white}
        onPress={skipPrevious}
      />
      <Icon
        asset={playPauseIcon}
        size={64}
        tint={colors.white}
        onPress={playPauseAction}
        containerStyle={{marginHorizontal: 30}}
      />
      <Icon
        asset={require('../assets/img/skip-next.png')}
        size={40}
        tint={colors.white}
        onPress={skipNext}
      />
    </View>
  );
};

export default MusicControls;
