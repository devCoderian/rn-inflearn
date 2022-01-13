import React, {Component} from 'react'
import { View, Image, Text, StyleSheet, ScrollView, Button, TextInput, ActivityIndicator, Linking} from 'react-native'
//import PickerComp from './src/picker'
import HomeScreen from './src/stack_navigation/HomeScreen';
import UserScreen from './src/stack_navigation/UserScreen';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
 } from '@react-navigation/drawer';

import DrawerHomeScreen from './src/drawer_navigation/home_drawer';
import DrawerUserScreen from './src/drawer_navigation/user_drawer';

import LogoTitle from './src/stack_navigation/logo';
import logoHome from './src/assets/pics/home.png';
import SideDrawer from './src/drawer_navigation/my_drawer';

const App = () => {
  
  // const CustomDrawerContent = (props) => {
  //   return(
  //     <DrawerContentScrollView {...props}>
  //       <DrawerItemList {...props} />
  //         <DrawerItem
  //           label="Help"
  //           onPress={() => Linking.openURL('http://www.google.com')}
  //           icon={LogoTitle}
  //         />
  //         <DrawerItem
  //         label="Info"
  //         onPress={() => alert('InfoWindow')}
  //         />
  //     </DrawerContentScrollView>
  //   )
  // }

  const Drawer = createDrawerNavigator();
  return (
       <NavigationContainer>
          <Drawer.Navigator
            initialRouteName='Home'
            //screenOptions 에 적용
            screenOptions={{
              drawerType: 'front'
              //drawerType: 'parmanenet' //sideDrawer가 열려서 닫히지 않는다.
              //기본: 덮는 front
              //오른쪽으로 여는 방법
              //drawer position을 오른쪽으로 준다. -> default -> 왼쪽
              ,drawerPosition:'right'  
              ,drawerStyle : {
                backgroundColor : '#c6cbef',
                width: 200
              },drawerActiveTintColor: '#fff'
              ,drawerActiveBackgroundColor: 'black'
            }}
            drawerContent={
              //함수 커스텀
              // props => CustomDrawerContent(props)
              //커스텀 드로어
              props => SideDrawer(props)
            }
            
            //drawerstyle 적용 path
            >
            <Drawer.Screen 
              name = "Home" 
              component={DrawerHomeScreen} 
              options={{
                drawerIcon:() => (
                  <Image
                  source={logoHome}
                  style = {{
                    width: 40,
                    height: 40,
                    tintColor: 'red'
                  }}/>
                )
              }}/>
            <Drawer.Screen name = "User" component={DrawerUserScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
  );
}

//image file



export default App
