import React from 'react';
import {View, SafeAreaView} from 'react-native';
import MusicPlayer from './containers/MusicPlayer';
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/lib/integration/react';

const App = () => (
  <SafeAreaView style={{flex: 1, backgroundColor: '#191414'}}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '100%',
            padding: 40,
          }}>
          <MusicPlayer />
        </View>
      </PersistGate>
    </Provider>
  </SafeAreaView>
);

export default App;
