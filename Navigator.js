import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CartScreen from './screens/Cart';
import Categories from './screens/Categories';
import Category from './screens/Category';
import OrdersScreen from './screens/Orders';
import SettingScreen from './screens/Setting';

const Stack = createNativeStackNavigator();

const CategoryStack = function ({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='CategoriesStack'
        options={{ title: 'Categories' }}
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
      <Stack.Screen
        name='SettingStack'
        options={{ title: 'Settings' }}
        component={SettingScreen}
      />
    </Stack.Navigator>
  );
};

const OrdersStack = function ({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='OrdersStack'
        options={{ title: 'Orders' }}
        component={OrdersScreen}
      />
    </Stack.Navigator>
  );
};

const CartStack = function ({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='CartStack'
        options={{ title: 'Cart' }}
        component={CartScreen}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
export default function Navigator({ navigation }) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Categories') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Orders') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={32} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name='Categories'
          options={{ headerShown: false }}
          component={CategoryStack}
        />
        <Tab.Screen
          name='Cart'
          options={{ headerShown: false }}
          component={CartStack}
        />
        <Tab.Screen
          name='Orders'
          options={{ headerShown: false }}
          component={OrdersStack}
        />
        <Tab.Screen
          name='Settings'
          options={{ headerShown: false }}
          component={SettingStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
