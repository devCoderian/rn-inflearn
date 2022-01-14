import React from 'react'
import { View, Text, TouchableOpacity, Button} from 'react-native'
const HomeScreen = ({navigation}) => {
    return (
        <View>
        <Text>Home!</Text>
        <Button
          title = "To User Screen"
          // HomeScreen에서 UserScreen으로 데이터를 보내는 걸 파라미터로 루트로 패싱한다.
          onPress ={
            () =>{
              navigation.navigate('Home', {
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

export default HomeScreen
