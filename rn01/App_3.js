import React, {Component} from 'react'
import { View, Image, Text, StyleSheet, ScrollView, Button, TextInput, ActivityIndicator} from 'react-native'
//import PickerComp from './src/picker'
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import Cap from './assets/images/cap.png'
import ModalComp from './src/comp/modal';

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
    alphabet: ['a', 'b', 'c', 'd'],
    language: '',
    value: 50,
   }
 
   onChangeInput = (e) => {
     this.setState({
       myTextInput: e
     });
   }
  
   sliderValueChange = (val) => { 
     this.setState({
       value: val
     })
   }
  render(){
    return (
      <View style ={styles.mainView}>
        {/* <Image 
          source={{uri:'https://picsum.photos/id/237/200/300'}}
          style={styles.image}
          resizeMode='contain'
          onLoadEnd={()=> alert('image Loaded!!')}/> */}
        <ModalComp />
        <Slider
          style={{width: 300, height: 40}}
          value={this.state.value}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="red"
          onValueChange={(val, idx) => this.sliderValueChange(val)}
        />
        <Text>
          {this.state.value}
        </Text>
        <ActivityIndicator 
        size="large"
        color="green"
        animating={true}
        />

        <Picker
        selectedValue={this.state.language}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({
            language: itemValue
          })
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="javascript" />
      </Picker>
         <TextInput
            value={this.state.myTextInput}
            style={styles.input}
            onChangeText={this.onChangeInput}
            maxLength={10} //글자수제한
        />
        <Button
          title="Add Text Input"
          onPress={() => this.onAddTextInput()}
        />
        <Text>{this.state.language}</Text>
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

//image file

const styles = StyleSheet.create({
  mainView:{
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 1,
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
  },
  image: {
    width: '100%',
    height: 100
  }
})
//position default 왼쪽 위



export default App
