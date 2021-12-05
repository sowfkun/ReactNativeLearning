import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

export default function ProductItem(props) {
  const { product, styleOptions } = props;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 10,

      borderRadius: 10,
      padding: 10,
      width: styleOptions.width || null,
    },
    image: {
      alignSelf: 'center',
      width: 100,
      height: 100,
    },
    productName: {
      alignSelf: 'center',
      color: 'red',
      margin: 10,
      fontSize: 18,
    },
    priceRow: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.productName}>{product.name}</Text>
      <View style={styles.priceRow}>
        <Text>{product.price} VND</Text>
        <Button title={'Mua'} />
      </View>
    </View>
  );
}
