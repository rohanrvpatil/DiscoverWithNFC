// src/screens/CounterScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CounterView from '../components/CounterView';
import CounterControllers from '../components/CounterControllers';

const CounterScreen = () => {
  return (
    <View style={styles.container}>
      <CounterView />
      <CounterControllers />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CounterScreen;
