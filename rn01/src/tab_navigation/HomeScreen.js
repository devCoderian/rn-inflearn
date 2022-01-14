import React from 'react'
import { View, Text, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home Screen</Text>
          <Button 
          title ="Go To Home Stack Screen"
          onPress = {() => {
            // Home_Stack으로 이동
            navigation.navigate('Home_Stack');
          }}
          />
        </View>
      );
}

export default HomeScreen
