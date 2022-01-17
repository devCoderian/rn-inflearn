import React from 'react'
import { SafeAreaView, Alert, Button, TouchableOpacity, TouchableHighlight, Text, TextInput } from 'react-native'
const onPress = () =>  Alert.alert('home pressed', 'message');

export default function App(){
  return ( 
    <SafeAreaView >
      <Button title ="Home"
        onPress={onPress}
      />
        <TouchableOpacity onPress={onPress}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
        <TouchableHighlight onPress={onPress}>
          <Text onPress={onPress}>TouchableHighlight</Text>
        </TouchableHighlight>
        <TextInput
        placeholder='enter your name' 
        onChangeText={(text) => console.log(text)}
        onFocus={() => console.log('onFocus')}
        onBlur ={() => console.log('onBlur')}
        onEndEditing ={() => console.log('onEndEditing')}
        />
    </SafeAreaView>
  )
}