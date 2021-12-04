import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import Img from '../assets/salad.png';
export default function CategoryListItems(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category List Items</Text>
      <Image style={styles.image} source={Img} />
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 2, height: 3 },
    elevation: 5,
  },
  title: {
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  image: {
    width: 64,
    height: 64,
  },
});
