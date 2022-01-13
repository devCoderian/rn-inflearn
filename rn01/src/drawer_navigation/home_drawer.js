import React ,{useEffect} from 'react'
import { View, Text, TouchableOpacity, Button, Image} from 'react-native'

const DrawerHomeScreen = ({navigation}) => {


    return (
        <View>
        <Text>Home</Text>
        <Button
          title = "To User Screen"
          // HomeScreen에서 UserScreen으로 데이터를 보내는 걸 파라미터로 루트로 패싱한다.
          onPress ={
            () =>{
              navigation.navigate('User', {
                userIdx: 100,
                userName: 'Ian',
                userLastName: 'Jung'
              })
            }
          }
          />
      </View>
    )
}

export default DrawerHomeScreen
