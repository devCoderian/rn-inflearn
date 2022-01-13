import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, Button} from 'react-native'
const UserScreen = ({navigation, route}) => {


      const headerStyle = () => {
        //root에서 setOPtion을 주고 있으면 먹지 않는다.
        navigation.setOptions({
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'green'
          }, 
          //headerBackTitle is suported only in IOS
          headerBackTitle: 'Back',
          headerRight: () => (
            <Button
              title = "go Back"
              onPress = {() =>{
                navigation.navigate('Home')
              }}
              color='orange'
              />
          )
        })
      }

      useEffect(()=> {
        headerStyle();
      },[])
      //본인의 루트에서 가져옴
      //route의 params 가 있는지 없는지 체크해야 한다.
      const {params} = route;

      const userIdx = params? params.userIdx : null;
      const userName = params? params.userName : null;
      const userLastName = params? params.userLastName : null;
      return (
        <View>
          <Text>UserScreen</Text>
          <Button
            title="To Home Screen"
            onPress = {() => {
              navigation.navigate('Home')
            }}
            />
              <Text>UserIdx: {JSON.stringify(userIdx)}</Text>
              <Text>userName: {JSON.stringify(userName)}</Text>
              <Text>userLastName: {JSON.stringify(userLastName)}</Text>
        </View>
      )
}

export default UserScreen
