import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryListItems from './components/CategoryListItems';

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryListItems />
      <CategoryListItems />
      <CategoryListItems />
      <CategoryListItems />
      <CategoryListItems />
      <CategoryListItems />
      <CategoryListItems />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
