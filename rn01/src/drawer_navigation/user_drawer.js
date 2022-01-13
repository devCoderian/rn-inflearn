import React ,{useEffect} from 'react'
import { View, Text, TouchableOpacity, Button, Image} from 'react-native'
import Logo from '../assets/pics/home.png'
const DrawerUserScreen = ({navigation}) => {

  const drawerStyle = () => {
    navigation.setOptions({
      drawerIcon: () => (
        <Image
          source = {Logo}
          style= {{
            width: 40,
            height: 40,
            tintColor: '#fff'
          }}
          />
      )
    })
  }

  useEffect(() => {
    drawerStyle()
  }, [])

      return (
        <View>
          <Text>UserScreen</Text>
          <Button
            title="To Home Screen"
            onPress = {() => {
              navigation.navigate('Home')
            }}
            />
        </View>
      )
}

export default DrawerUserScreen
