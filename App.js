'use strict';
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Login from './src/components/Login';
import Secured from './src/components/Secured';
import SearchPage from './src/components/SearchPage';
import SearchResults from './src/components/SearchResults';


class App extends Component {

  state = {
    isLoggedIn: false
  }

  render() {

    if (this.state.isLoggedIn) 
      return <Secured 
          onLogoutPress={() => this.setState({isLoggedIn: false})}
        />;
    else 
      return <Login 
          onLoginPress={() => this.setState({isLoggedIn: true})}
        />;
  }

}

AppRegistry.registerComponent(App , () => App );


// import {Platform, StyleSheet, Text, View} from 'react-native';
// import { createStackNavigator, } from 'react-navigation';



  

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


// const App = createStackNavigator({
//     Home: { screen: SearchPage },
//     Results: { screen: SearchResults },
//   });
  
    export default App;


  