//customizing 컴포넌트 화면
import React from 'react'
import { View, Text, StyleSheet, Button, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Logo from '../assets/pics/home.png';
import { CommonActions } from '@react-navigation/native';

const SideDrawer = ({navigation}) => {

    //arrow는 return 두번 중괄호안의 함수를 또 리턴값으로 받는 것
    //중괄호 안 state를 업데이트 쳐줌
    //함수를 한번 더 걸지 않으면 무한 루프에 빠진다.
    //updatebehavior를 위한 트리거 장치가 필요함 -> arrow 두번 사용
    //CommonActions 라이브러리는 여러 액션 크리에이터를 사용하게 해준다.
    //dispatch로 state업데이트 -> 루트로 이동하고 params를 업데이트 함
    const navigateToScreen = (route) => () => {
        navigation.dispatch(
            CommonActions.navigate({
                name: route,
                params: {},
            })
        )
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style = {styles.imageContainer}>
                    <Image
                        source={Logo}
                        style = {{
                            width: 40, 
                            height: 40,
                            tintColor: 'black'
                        }}
                    />
                </View>
                <Text style={styles.sectionHeading}>Section1</Text>
                <View style={styles.sectionTitle}>
                    <Text 
                    style={styles.navItemStyle}
                    onPress={navigateToScreen('Home')}>
                    Home</Text>
                    <Text 
                    style={styles.navItemStyle}
                    onPress={navigateToScreen('User')}>
                    User</Text>
                    <Text 
                    style={styles.navItemStyle}
                    onPress={navigateToScreen('Home')}>
                    Home</Text>
                    <Text 
                    style={styles.navItemStyle}
                    onPress={navigateToScreen('User')}>
                    Home</Text>
                </View>
            </ScrollView>
            <View style = {{ paddingLeft: 10, paddingBottom: 30 }}>
                <Text>Copyright @ Wintho, 2020</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
    },
    imageContainer: { 
        alignItems: 'center',
        padding: 50,

    },sectionHeading:{
        color: '#fff',
        backgroundColor: '#ef9de4',
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontWeight: 'bold'
    },sectionTitle:{
        // alignItems: 'center',
        backgroundColor: '#04b6ff'
    },navItemStyle:{
        padding: 10,
        color: '#fff'
    }
 });
export default SideDrawer
