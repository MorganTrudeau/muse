import {combineReducers} from 'redux';
import {trackPlayer} from './trackPlayer';
import {music} from './music';

export const rootReducer = combineReducers({trackPlayer, music});
