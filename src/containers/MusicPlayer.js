import React from 'react';
import TrackPlayer from 'react-native-track-player';
import {connect} from 'react-redux';
import * as TrackActions from '../actions/trackPlayer';
import MusicPlayerModal from '../components/MusicPlayerModal';
import MusicPlayerBar from '../components/MusicPlayerBar';

type Props = {componentType: 'modal' | 'bar'};

class MusicPlayer extends React.Component<Props> {
  state = {isPlaying: false, modalVisible: false};

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

  closeModal = () => this.setState({modalVisible: false});
  openModal = () => this.setState({modalVisible: true});

  render() {
    const currentTrack = this.props.tracks[this.props.currentTrackId];

    const musicPlayerProps = {
      currentTrack,
      trackPlayerState: this.props.trackPlayerState,
      play: this.play,
      pause: this.pause,
      seekTo: this.seekTo,
      skipNext: this.skipNext,
      skipPrevious: this.skipPrevious,
    };

    return (
      <React.Fragment>
        <MusicPlayerBar {...musicPlayerProps} openModal={this.openModal} />
        <MusicPlayerModal
          {...musicPlayerProps}
          visible={this.state.modalVisible}
          onRequestClose={this.closeModal}
        />
      </React.Fragment>
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

const mapDispatch = dispatch => {
  return {
    updateTrack: id => dispatch(TrackActions.trackChanged(id)),
  };
};

export default connect(
  mapState,
  mapDispatch,
)(MusicPlayer);
