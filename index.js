/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import musicPlayerService from './src/utils/musicPlayerService';

console.disableYellowBox = true;

TrackPlayer.setupPlayer().then(() => {
  console.log('Track player set up');
});

// TrackPlayer.updateOptions({
//   ratingType: TrackPlayer.RATING_5_STARS,
//   stopWithApp: false,
//   capabilities: [
//     TrackPlayer.CAPABILITY_PLAY,
//     TrackPlayer.CAPABILITY_PAUSE,
//     TrackPlayer.CAPABILITY_STOP,
//   ],
//   compactCapabilities: [
//     TrackPlayer.CAPABILITY_PLAY,
//     TrackPlayer.CAPABILITY_PAUSE,
//   ],
// });

AppRegistry.registerComponent(appName, () => App);

TrackPlayer.registerPlaybackService(() => musicPlayerService);
