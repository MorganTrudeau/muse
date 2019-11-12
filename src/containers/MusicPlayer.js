import React from 'react';
import {View} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import MusicControls from '../components/MusicControls';
import MusicSeekBar from '../components/MusicSeekBar';

const track = {
  id: 'unique track id',
  url:
    'https://p.scdn.co/mp3-preview/4808af6481b8dd5eea27c30416a16fb49e83c89b?cid=a2ab0fdc0d9b438196efafed4e56e97d.mp3', // Load media from the network
  title: 'Avaritia',
  artist: 'deadmau5',
  album: 'while(1<2)',
  genre: 'Progressive House, Electro House',
  date: '2014-05-20T07:00:00+00:00', // RFC 3339

  artwork:
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7ae21af-7b8f-4f38-9c0c-e89de27923c9/daq33xv-2182a482-ba8b-40bf-9bf0-9e00c68906a0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q3YWUyMWFmLTdiOGYtNGYzOC05YzBjLWU4OWRlMjc5MjNjOVwvZGFxMzN4di0yMTgyYTQ4Mi1iYThiLTQwYmYtOWJmMC05ZTAwYzY4OTA2YTAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8si4126BjCQI1KbeDuH0Hz3p3tRtYf-k92CXfi9KPzo', // Load artwork from the network
};

class MusicPlayer extends React.Component {
  state = {isPlaying: false};

  componentDidMount() {
    TrackPlayer.add([track]);
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
    return (
      <View style={{width: '100%', alignItems: 'center'}}>
        <MusicSeekBar onSeek={this.seekTo} />
        <MusicControls
          isPlaying={this.state.isPlaying}
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

export default MusicPlayer;
