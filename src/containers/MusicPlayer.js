import React from 'react';
import {View, Image, Text} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import MusicControls from '../components/MusicControls';
import MusicSeekBar from '../components/MusicSeekBar';
import {connect} from 'react-redux';

class MusicPlayer extends React.Component {
  state = {isPlaying: false};

  componentDidMount() {
    console.log(this.props.tracks);
    TrackPlayer.add(Object.values(this.props.tracks));
  }

  play = () => {
    this.setState({isPlaying: true});
    TrackPlayer.play();
  };

  pause = () => {
    this.setState({isPlaying: false});
    TrackPlayer.pause();
  };

  seekTo = position => {
    TrackPlayer.seekTo(position);
  };

  skipNext = () => {
    TrackPlayer.skipToNext();
  };

  skipPrevious = () => {
    TrackPlayer.skipToPrevious();
  };

  render() {
    const currentTrack = this.props.tracks[this.props.currentTrackId] || {};
    console.log('CURRENT TRACK', currentTrack);
    return (
      <View style={{width: '100%', alignItems: 'center', flex: 1}}>
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
        <MusicSeekBar onSeek={this.seekTo} />
        <MusicControls
          trackPlayerState={this.props.trackPlayerState}
          play={this.play}
          pause={this.pause}
          skipNext={this.skipNext}
          skipPrevious={this.skipPrevious}
          style={{marginTop: 15}}
        />
      </View>
    );
  }
}

const mapState = state => {
  return {
    trackPlayerState: state.trackPlayer.state,
    tracks: state.music.tracks,
    currentTrackId: state.trackPlayer.currentTrack,
  };
};

export default connect(mapState)(MusicPlayer);
