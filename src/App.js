import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import AppNavigator from './navigation';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppNavigator />
    </PersistGate>
  </Provider>
);

export default App;
