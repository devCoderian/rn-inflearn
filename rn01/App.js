import React, {Component} from 'react'
import { View, Text, StyleSheet, ScrollView, Button, TextInput} from 'react-native'
import Input from './src/input'

class App extends Component{

  onAddTextInput = () => {
    this.setState(prevState => {
      return {
        myTextInput: '',
        alphabet: [...prevState.alphabet, prevState.myTextInput]
      }
    })
  }

  state= {
    myTextInput: '',
    alphabet: ['a', 'b', 'c', 'd']
   }
 
   onChangeInput = (e) => {
     this.setState({
       myTextInput: e
     });
   }
  
  render(){
    return (
      <View style ={styles.mainView}>
         <TextInput
            value={this.state.myTextInput}
            style={styles.input}
            onChangeText={this.onChangeInput}
            //multiline={true} //개행 기능
            maxLength={10} //글자수제한
            //autoCapitalize={'none'} //대문자 자동수정 끄기
            //editable={false} //text-input disabled 
        
        />
        <Button
          title="Add Text Input"
          onPress={() => this.onAddTextInput()}
        />
        <ScrollView style={{width: '100%'}}>
          {
          this.state.alphabet.map((item, idx)=> (
              <Text style={styles.mainText} key={idx}>{item}</Text>
          ))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView:{
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView: {
    backgroundColor: 'yellow',
    flex: 2,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent:'center'
  },
  mainText:{
    fontSize: 20,
    fontWeight: 'normal',
    color: 'black',
    padding: 20,
    margin: 20,
    backgroundColor: 'pink'
  },
  input:{
    width:'100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10
  }
})
//position default 왼쪽 위



export default App
