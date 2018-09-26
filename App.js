'use strict';



import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, } from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';


  

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const App = createStackNavigator({
    Home: { screen: SearchPage },
    Results: { screen: SearchResults },
  });
  
    export default App;


  