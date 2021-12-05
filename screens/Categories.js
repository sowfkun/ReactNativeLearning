import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import CategoryListItems from '../components/CategoryListItems';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, cateName: 'Noodle' },
        { id: 2, cateName: 'Rice' },
        { id: 3, cateName: 'Meat' },
      ],
    };
  }
  render() {
    const { categories } = this.state;
    const { navigation } = this.props;
    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={categories}
        renderItem={({ item }) => (
          <CategoryListItems
            category={item}
            onPress={() => navigation.navigate('Category')}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#fff',
    paddingTop: 10,
  },
});
