import React from 'react';
import {View, SafeAreaView} from 'react-native';
import MusicPlayer from './containers/MusicPlayer';

const App = () => (
  <SafeAreaView style={{flex: 1, backgroundColor: '#191414'}}>
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
  </SafeAreaView>
);

export default App;
