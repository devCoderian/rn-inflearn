import React, {Component} from 'react'
import { View, Image, Text, StyleSheet, ScrollView, Button, TextInput, ActivityIndicator} from 'react-native'
//import PickerComp from './src/picker'
import HomeScreen from './src/stack_navigation/HomeScreen';
import UserScreen from './src/stack_navigation/UserScreen';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import LogoTitle from './src/stack_navigation/logo';


const App = () => {
  
  const Stack = createStackNavigator();


  // const LogoTitle = () =>{
  //   return(
  //   <Image
  //     style = {{width: 40, height: 40}}
  //     source={require('./src/assets/pics/home.png')}
  //   />
  //     )
  // }
  return (
        <NavigationContainer>
          <Stack.Navigator initalRouteName ="Home">
            <Stack.Screen 
              name="Home" 
              component ={HomeScreen} 
              options={{
                title:'Home Title',
                headerTitle: () => LogoTitle(),
                headerRight: () => (
                  <Button
                    title="Info"
                    onPress={() => alert('button')}
                    color ='orange'
                    />
                )
                }}/> 
            <Stack.Screen 
              name= "User" 
              component ={UserScreen} 
              initialParams={{
                userIdx: 50,
                userName: 'Ian',
                userLastName: 'Jung'
              }}
              // options={{
              //   title: 'User Screen',
              //   headerStyle: {
              //     backgroundColor: 'pink'
              //   },
              //   headerTintColor: 'red',
              //   headerTitle: () => LogoTitle(),
              //   headerTitleStyle: {
              //     fontWeight: 'bold',
              //     color: 'purple'
              //   }
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
  );
}

//image file



export default App
