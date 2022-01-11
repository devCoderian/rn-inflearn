import React, {Component} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Input from './src/input'

class App extends Component{

  state= {
    appName: 'My First App',
    random : [242, 23]
  }

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random()*100)+1;
    this.setState(prevState =>{
      return {
        random: [...prevState.random, randomNum]
      }
    })
  } 

  onNumDelete = (position) => {
    const newArray = this.state.random.filter((num, idx) => {
      return position != idx;
    })
    this.setState({
      random: newArray
    })
  }
  render(){
    return (
      <View style ={styles.mainView}>
        <Input />
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
    padding: 20
  }
})
//position default 왼쪽 위



export default App
