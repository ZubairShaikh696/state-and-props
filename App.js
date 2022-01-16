//Functional Components

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PresentationalComponent from './PresentationalComponent';

export default function App() {
  const[state,setState]=useState('zubair shakh');
  const updateState = () => {
        setState('The state is updated')
     }
  return (
    <View style={styles.container}>
    {console.log(state)}
      <PresentationalComponent myState={state} updateState = {updateState}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
