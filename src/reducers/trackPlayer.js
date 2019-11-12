import {ActionTypes} from '../actions/ActionTypes';

const initialState = {
  state: null,
  currentTrack: null,
  nextTrack: null,
};

export const trackPlayer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TRACK_CHANGED:
      return {
        ...state,
        currentTrack: action.track,
        nextTrack: action.nextTrack,
      };
    case ActionTypes.TRACK_PLAYER_STATE_CHANGED:
      return {...state, state: action.state};
    default:
      return state;
  }
};
