import {ActionTypes} from './ActionTypes';

export const trackChanged = (track, nextTrack) => ({
  type: ActionTypes.TRACK_CHANGED,
  track,
  nextTrack,
});

export const trackPlayerStateChanged = state => ({
  type: ActionTypes.TRACK_PLAYER_STATE_CHANGED,
  state,
});
