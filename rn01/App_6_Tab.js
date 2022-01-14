import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/tab_navigation/HomeScreen';
import SettingsScreen from './src/tab_navigation/SettingsScreen';

const App = () => {

  const Tab = createBottomTabNavigator();
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name = "Home" component = {HomeScreen} />
          <Tab.Screen name = "Settings" component = {SettingsScreen} />
        </Tab.Navigator>   
      </NavigationContainer>
  );
}

//image file



export default App
