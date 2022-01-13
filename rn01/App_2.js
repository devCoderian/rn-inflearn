import React, {Component} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Header from './src/comp/header'
import Generator from './src/comp/generator'
import NumList from './src/comp/NumList'

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
            >숫자 랜덤 생성기</Text>
          </View>
        <Generator add ={this.onAddRandomNum}/>
        <ScrollView 
          style={{width: '100%'}}
          onMomentumScrollBegin={() => alert('begin')} //스크롤을 떼었을때 저절로 움직이는 시점이 시작할 때
          //onMomentumScrollEnd={() => alert('end')} //스크롤을 떼었을때 저절로 움직이는 시점이 끝날 때 
          //onScroll={() => alert('Scrolling')} //1px이라도 움직이면 트리거링 해준다.
          // onContentSizeChange={(width, height) => alert(height)} //스크롤이 감싸는 컴포넌트의 높이와 너비가 바뀌어 있을때 트리거 함수 실행 -> width, height를 인자로 가진다.
          bounces ={true} //스크롤이 끝났을 떄 일어나는 바운스 애니메이션 효과 true/false
          >
          <NumList 
            num= {this.state.random}
            delete={this.onNumDelete}/>
        </ScrollView>
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
    color: 'black',
    padding: 20
  }
})
//position default 왼쪽 위



export default App
