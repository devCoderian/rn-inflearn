import Color from 'color'
import React from 'react'
import { StyleSheet, SafeAreaView, Text, ImageBackground, Image, View } from 'react-native'
import { Colors } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const App = () => {

  const text = `Almost before we knew it , we had left the ground`
  const onIconPressed = () => console.log('icon pressed');
  return (
    <SafeAreaView style = {styles.flex}>
      {/* Image나 ImageBackground는 항상 source 속성에 require를 사용하여 읽는 방식으로 파일을 설정해야 한다. */}
      
      {/* ImageBackground  화면 전체를 덮는 방식으로 사용 
          안에 View 컴포넌트를 자식으로 사용할 수 있다.
          Image 컴포너트는 자식을 가질 수 없음
          둘 다 앱의 자원이 아닌 다른 원격지 서버에서 파일을 내려받아 렌더링할 떄는
          source = {{uri: avataUrl}} uri 형태의 객체를g 설정 */}
      {/* <ImageBackground
      style = {styles.flex}
      source = {require('./src/assets/images/pcBackground_big.png')}
      /> */}
      <ImageBackground
      style = {[styles.flex, styles.ImageBackground]}
      source = {require('./src/assets/images/Swap_fin_web.png')}>
      <Image source ={require('./src/assets/images/pcBackground_big.png')} style= {styles.image} />
      
      
      {/* ImageComp 안에 설정하기 */}
      <View style={styles.flex}>
        <Text style = {[styles.regular]}>{text}</Text>  
        <Text style = {[styles.bold]}>{text}</Text>  
        <Text style = {[styles.bold]}>{text}</Text>  
      </View>
      <Icon name = "home" size = {50} color = {Colors.lightBlue500} onPress={onIconPressed} />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: { flex:1 },
  ImageBackground: {padding: 10},
  image: {width: 50, height: 50, borderRadius: 25},
  regular: {color: '#fff',fontSize: 30, fontFamily: 'DancingScript-Regular'},
  bold: {fontSize: 30, fontFamily: 'DancingScript-Bold', 
  fontWeight: Platform.select({ios: '700', android: '600'})}
})

export default App
