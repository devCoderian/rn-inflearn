import React, {Component} from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
class Input extends Component{

  state= {
   myTextInput: ''
  }

  onChangeInput = (e) => {
    this.setState({
      myTextInput: e
    });
  }

  render(){
    return (
      <View style={styles.mainView} >
      <TextInput
        value={this.state.myTextInput}
        style={styles.input}
        onChangeText={this.onChangeInput}
        multiline={true} //개행 기능
        maxLength={10} //글자수제한
        //autoCapitalize={'none'} //대문자 자동수정 끄기
        //editable={false} //text-input disabled 
        />
      </View>
    )
  }
}

const styles= StyleSheet.create({
  mainView: {
    width: '100%'
  },
  input:{
    width:'100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10
  }
})


export default Input
