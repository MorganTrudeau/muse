import TrackPlayer from 'react-native-track-player';
import {store} from '../store';
import * as TrackActions from '../actions/trackPlayer';

module.exports = async function() {
  TrackPlayer.addEventListener('playback-state', ({state}) =>
    store.dispatch(TrackActions.trackPlayerStateChanged(state)),
  );

  TrackPlayer.addEventListener('playback-track-changed', data => {
    console.log('Track changed', data);
    const {track, nextTrack, position} = data;
    store.dispatch(TrackActions.trackChanged(track, nextTrack));
  });

  TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());

  TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());

  TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());
};
