// src/components/CounterView.tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../Redux/store';

const CounterView = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <View>
      <Text style={styles.text}>Counter Value: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CounterView;
