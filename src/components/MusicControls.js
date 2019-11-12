import React from 'react';
import {View} from 'react-native';
import Icon from '../components/Icon';
import global, {colors} from '../styles';
import {State} from 'react-native-track-player';

const MusicControls = ({
  trackPlayerState,
  play,
  pause,
  skipPrevious,
  skipNext,
  style,
}) => {
  const playPauseIcon =
    trackPlayerState === State.Playing
      ? require('../assets/img/pause.png')
      : require('../assets/img/play.png');
  const playPauseAction = trackPlayerState === State.Playing ? pause : play;
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
