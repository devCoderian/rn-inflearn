import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, DrawerActions, useNavigation } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import TabHomeScreen from './src/tab_navigation/HomeScreen';
import UserScreen from './src/stack_navigation/UserScreen';
import StackHomeScreen from './src/stack_navigation/HomeScreen';
import TabSettingScreen from './src/tab_navigation/SettingsScreen';
import SideDrawer from './src/drawer_navigation/my_drawer';



const App = () => {

  
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  //Stack Navigator (Tab Navigator 전체가 Stack Navigator의 컴포넌트로 들어감)
  // -  Drawer Navigatior -> 
    // - Drawer Screen D
    // - Drawer Screen E
    // - Tab Navigator // Drawer Screen 으로 구현됨 -> TabComponent
    //    - Tab Screen F
    //    - Tab Screen G
  // - Stack Screen B
  // - Stack Screen C
  //첫번째 Stack Screen에만 Drawer랑 Tab이 걸려있기 떄문에 Stack으로 이동하면 보이지 않는다.
  const TabComponent = () => {
    return(
      <Tab.Navigator
        initialRouteName='Home'
        tabBarOption ={{
          activeBackgroundColor: 'skyblue',
          activeTintColor: 'blue',
          inactiveTintColor: '#fff',
          style: {
            backgroundColor: '#c6cbef'
          },
          labelPosition: 'below-icon'
        }}
        screenOptions={({route}) => ({
            headerShown: false,
            tabBarLabel: route.name,
            tabBarTcon: ({focused}) => (
            TabBarIcon(focused, route.name)
          )
        })}
        >
          <Tab.Screen name = "Home_Tab" component={TabHomeScreen} />
          <Tab.Screen name = "Settings" component={TabSettingScreen} />
        </Tab.Navigator>
    )
  }

  const DrawerComponent = () => {

    return(
        <Drawer.Navigator
        initialRouteName='Home'
        screenOptions={{
          drawerType: 'front'
          ,drawerPosition:'right'  
          ,drawerStyle : {
            backgroundColor : '#c6cbef',
            width: 200
          },drawerActiveTintColor: '#fff'
          ,drawerActiveBackgroundColor: 'black'
          // ,headerShown: false
        }}
        drawerContent={
          props => SideDrawer(props)
        }
        >
        <Drawer.Screen name = "Route" component={TabComponent} screenOptions = {{headerShown: false}}/>
      </Drawer.Navigator>
    )
  }

  const HeaderRight = () => {
    const navigation = useNavigation();
    return(
      <View style = {{flexDirection:'row', paddingRight: 15}}>
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}>
          <Text>Open</Text>
        </TouchableOpacity>
      </View>
    )
  }


  return (
      <NavigationContainer>
        {/* Stack */}
        {/* screenOptions = {{headerShown: false}} */}
        <Stack.Navigator >
          {/* Main Screen -> Tab Navigator  */}
          <Stack.Screen 
            name = "Home" 
            component = {DrawerComponent} 
            options={{
              headerRight: ({}) => <HeaderRight />
            }}
            />
          <Stack.Screen name = "Home_Stack" 
          component = {StackHomeScreen} 
          options={{
            headerRight: ({}) => <HeaderRight />
          }}
         />
        </Stack.Navigator>   
        {/* Draw */}
      </NavigationContainer>
  );
}

//image file



export default App
