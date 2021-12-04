import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CategoryListItems from './components/CategoryListItems';

export default class App extends React.Component {
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
    console.log(categories);
    return (
      // <ScrollView>
      //   {categories.map((category) => (
      //     <CategoryListItems category={category} />
      //   ))}
      // </ScrollView>

      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryListItems category={item} />}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
