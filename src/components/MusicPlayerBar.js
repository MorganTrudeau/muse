import React from 'react';
import {Image, Text, View, TouchableWithoutFeedback} from 'react-native';
import MusicSeekBar from './MusicSeekBar';
import global, {colors} from '../styles';
import Icon from './Icon';
import {State} from 'react-native-track-player';

const MusicPlayerBar = ({
  currentTrack,
  trackPlayerState,
  play,
  pause,
  openModal,
}) => {
  if (!currentTrack) {
    return null;
  }
  const playPauseIcon =
    trackPlayerState === State.Playing
      ? require('../assets/img/pause.png')
      : require('../assets/img/play.png');
  const playPauseAction = trackPlayerState === State.Playing ? pause : play;
  return (
    <View style={{width: '100%'}}>
      {/*<MusicSeekBar disabled={true} />*/}
      <View style={[global.row, {width: '100%', padding: 10}]}>
        <TouchableWithoutFeedback onPress={openModal}>
          <View style={[global.row, {flex: 1}]}>
            <Image
              source={{uri: currentTrack.artwork}}
              resizeMode={'contain'}
              style={{height: 50, width: 50, marginRight: 10}}
            />
            <View>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  color: '#fff',
                  alignSelf: 'flex-start',
                }}>
                {currentTrack.title}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  opacity: 0.5,
                  color: '#fff',
                  alignSelf: 'flex-start',
                }}>
                {currentTrack.artist}
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <Icon
          asset={playPauseIcon}
          size={30}
          tint={colors.white}
          onPress={playPauseAction}
          containerStyle={{marginRight: 10}}
        />
      </View>
    </View>
  );
};

export default MusicPlayerBar;
