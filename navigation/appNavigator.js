import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ProductsScreen from '../screens/ProductsScreen';
import GalleryScreen from '../screens/GalleryScreen';
import ContactScreen from '../screens/ContactScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Products') {
            iconName = focused ? 'bag' : 'bag-outline';
          } else if (route.name === 'Gallery') {
            iconName = focused ? 'images' : 'images-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'mail' : 'mail-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFFF', // Preto
        tabBarInactiveTintColor: '#FFFF', // Preto
        tabBarStyle: {
          backgroundColor: '#FA4616', // Cor de fundo
        },
        headerShown: false, // Configuração do cabeçalho
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Gallery" component={GalleryScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
