import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import CategoryListItems from '../components/CategoryListItems';

export default function Categories(props) {
  const [categories, setCategories] = useState([]);
  const { navigation } = props;

  useEffect(() => {
    axios
      .get('https://ifofv.sse.codesandbox.io/categories')
      .then((res) => setCategories(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={categories}
      renderItem={({ item }) => (
        <CategoryListItems
          category={item}
          onPress={() => navigation.navigate('Category', { category: item })}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#fff',
    paddingTop: 10,
  },
});
