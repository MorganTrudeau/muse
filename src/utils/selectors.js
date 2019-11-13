import {createSelector} from 'reselect';

const getTracks = state => state.music.tracks;

export const tracksToArray = createSelector(
  getTracks,
  tracks => Object.values(tracks),
);
