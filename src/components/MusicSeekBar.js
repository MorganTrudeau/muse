import React from 'react';
import Slider from '@react-native-community/slider';
import {useProgress} from 'react-native-track-player/lib/hooks';

const MusicSeekBar = ({onSeek, width = '100%', height = 80, disabled}) => {
  const {position, bufferedPosition, duration} = useProgress();
  console.log('POSITION', position);
  return (
    <Slider
      style={{width, height}}
      value={position}
      minimumValue={0}
      maximumValue={duration}
      minimumTrackTintColor={'#fff'}
      maximumTrackTintColor={'#d3d3d3'}
      onSlidingComplete={onSeek}
    />
  );
};

export default MusicSeekBar;
