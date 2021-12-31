import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import BlogScreen from '../screens/BlogScreen';
import BlogDeatails from '../screens/BlogDeatails';
 import ProductList from '../screens/ProductList';
 import ProductDetails from '../screens/ProductDetails'

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BlogScreen"
        component={BlogScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BlogDeatails"
        component={BlogDeatails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
