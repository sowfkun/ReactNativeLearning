import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import ProductItem from '../components/ProductItem';

const { width } = Dimensions.get('window');
const itemWidth = width / 2 - 15;
const styleOptions = {
  width: itemWidth,
};

export default function Categories({ route, navigation }) {
  const { category } = route.params;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      title: category.cateName,
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
    async function fetchData() {
      try {
        const result = await axios.get(
          `https://ifofv.sse.codesandbox.io/products?category=${category.id}`,
        );
        setProducts(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <FlatList
      numColumns={2}
      contentContainerStyle={styles.container}
      data={products}
      renderItem={({ item }) => (
        <View style={styles.wrapper}>
          <ProductItem styleOptions={styleOptions} product={item} />
        </View>
      )}
      keyExtractor={(item) => `${item.id}`}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  wrapper: {
    flex: 1,
    width: 10,
    paddingHorizontal: 5,
  },
  item: {},
});
