import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StartScreen from './components/StartScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <StartScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;