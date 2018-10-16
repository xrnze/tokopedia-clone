import React, {Component} from 'react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import store from './src/redux/store';
import RootStack from './src/Rootstack/RootStack';

export default class App extends Component{

  render() {
    return (
      <Provider store={store}>
        <RootStack/>
      </Provider>
    )
  }
}
