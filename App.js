import React from 'react';
import Navbar from './components/Navigation/Navbar'
import Cars from './components/Cars/Cars'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

const App = () => {

  return (
    <View style={styles.container}>
      <Navbar />
      <Cars />
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

export default App