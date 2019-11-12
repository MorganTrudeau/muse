import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from '../reducers';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from '../epics';
import AsyncStorage from '@react-native-community/async-storage';

const epicMiddleware = createEpicMiddleware();

const middleWare = [epicMiddleware];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: [],
};

const middlewareOperator =
  window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(...middleWare),
      )
    : applyMiddleware(...middleWare);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, middlewareOperator);

export const persistor = persistStore(store);

epicMiddleware.run(rootEpic);
