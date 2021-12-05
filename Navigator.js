import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Categories from './screens/Categories';
import Category from './screens/Category';
import SettingScreen from './screens/Setting';
import OrdersScreen from './screens/Orders';
import CartScreen from './screens/Cart';
const Stack = createNativeStackNavigator();

const CategoryStack = function ({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Categories'
        component={Categories}
        navigation={navigation}
      />
      <Stack.Screen name='Category' component={Category} />
    </Stack.Navigator>
  );
};
const SettingStack = function ({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Setting' component={SettingScreen} />
    </Stack.Navigator>
  );
};

const OrdersStack = function ({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Orders' component={OrdersScreen} />
    </Stack.Navigator>
  );
};

const CartStack = function ({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Cart' component={CartScreen} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
export default function Navigator({ navigation }) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='CategoryTab'
          options={{ headerShown: false }}
          component={CategoryStack}
        />
        <Tab.Screen
          name='CartTab'
          options={{ headerShown: false }}
          component={CartStack}
        />
        <Tab.Screen
          name='OrdersTab'
          options={{ headerShown: false }}
          component={OrdersStack}
        />
        <Tab.Screen
          name='SettingTab'
          options={{ headerShown: false }}
          component={SettingStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
