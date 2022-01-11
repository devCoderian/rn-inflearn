import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'


const Header = (props) => {
    return(
        <TouchableOpacity
            style ={styles.header}
            // onPress = {() => alert('확인')}
            //onLongPress = {() => alert('확인')} //오래눌러야 작동
            //onPressIn = {() => alert('helloworld')} //누르자마자 즉각적으로 반응
            onPressOut={() => alert('helloworld')}
        >
            <View>
                <Text>{props.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'pink', 
        alignItems: 'center',
        padding: 5,
        width: '100%'
    }
})

export default Header
