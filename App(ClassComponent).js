//Class Component

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import PresentationalComponent from './PresentationalComponent'

export default class App extends React.Component {
  state = {
     myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod'
  }
  updateState = () => {
     this.setState({ myState: 'The state is updated' })
  }
  render() {
     return (
        <View style={styles.container}>
           <PresentationalComponent myState = {this.state.myState} updateState = {this.updateState}/>
        </View>
     );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});