import {combineReducers} from 'redux';
import {trackPlayer} from './trackPlayer';
import {music} from './music';
import {auth} from './auth';
import {network} from './network';

export const rootReducer = combineReducers({trackPlayer, music, auth, network});
