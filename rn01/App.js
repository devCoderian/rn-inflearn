import React, {Component} from 'react'
import { View, Text, StyleSheet, YellowBox } from 'react-native'
import Header from './src/header'
import Generator from './src/generator'
import NumList from './src/NumList'

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
        <Header name = {this.state.appName}/>
          <View>
          <Text
            style={styles.mainText}
            onPress={()=> alert('text touch event')}
            >Hello world</Text>
          </View>
        <Generator add ={this.onAddRandomNum}/>
        <NumList 
          num= {this.state.random}
          delete={this.onNumDelete}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView:{
    backgroundColor: 'white',
    paddingTop: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
    color: 'red',
    padding: 20
  }
})
//position default 왼쪽 위



export default App
