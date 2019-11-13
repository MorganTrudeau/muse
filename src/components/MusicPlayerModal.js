import React from 'react';
import {Image, Text, View, Modal, SafeAreaView} from 'react-native';
import MusicSeekBar from './MusicSeekBar';
import MusicControls from './MusicControls';
import {colors} from '../styles';
import Icon from '../components/Icon';

const MusicPlayerModal = ({
  visible,
  currentTrack,
  play,
  pause,
  skipNext,
  skipPrevious,
  trackPlayerState,
  seekTo,
  onRequestClose,
}) => {
  return (
    <Modal
      animationType={'slide'}
      visible={visible}
      onRequestClose={onRequestClose}>
      <SafeAreaView style={{flex: 1, backgroundColor: colors.bg}}>
        <Icon
          asset={require('../assets/img/arrow-down.png')}
          tint={colors.grey}
          size={30}
          containerStyle={{padding: 20}}
          onPress={onRequestClose}
        />
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            flex: 1,
            padding: 40,
          }}>
          {!!currentTrack && (
            <React.Fragment>
              <Image
                source={{uri: currentTrack.artwork}}
                resizeMode={'contain'}
                style={{height: undefined, width: '100%', flex: 1}}
              />
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
            </React.Fragment>
          )}
          <MusicSeekBar onSeek={seekTo} />
          <MusicControls
            trackPlayerState={trackPlayerState}
            play={play}
            pause={pause}
            skipNext={skipNext}
            skipPrevious={skipPrevious}
            style={{marginTop: 15}}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default MusicPlayerModal;
