import Color from 'color'
import React from 'react'
import { StyleSheet, SafeAreaView, Text, Platform, Dimensions, View } from 'react-native'
import { Colors } from 'react-native-paper';
const  { width, height }  = Dimensions.get('window'); //height: 100%와 동일
export default function App(){

  console.log(Platform.OS);

  return(
    <SafeAreaView style = {[styles.safeAreaView]}>
      <Text style = {[styles.text]}>os: {Platform.OS}</Text>
      <Text style = {[styles.text]}>width: {width}</Text>
      <Text style = {[styles.text]}>height: {height}</Text>
    
      <View style = {[styles.box, styles.border]} />
      <View style = {[styles.box, styles.border, {borderRadius: 20}]} />
      <View style = {[styles.box, styles.border, {borderTopLeftRadius: 40, borderBottomLeftRadius: 40}]} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView:{
    flex: 1, //height: '100%', 0.5 -> height: 0.5
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Colors.blue500,
    margin: '10%',
    // height
    //width와 height의 속성값이 flex보다 우선순위가 높다.
    //운영체제별 다르게 적용
    paddingLeft: Platform.select({ios: 0, android: 20})
  },
  text: {fontSize: 20, color: Color(Colors.blue500).alpha(0.7).lighten(0.9).string()},
  box: {height: 100, backgroundColor: Colors.lime500, marginBottom: 10 
    ,marginLeft: Platform.select({ios: 0, android: 20})}, 
  border: {borderWidth: 10, borderColor: Color('black').alpha(0.3).string()}
})