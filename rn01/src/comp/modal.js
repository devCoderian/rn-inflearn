import React, {useState} from 'react'
import {View, Modal,  Image, Text, Button } from 'react-native'
const ModalComp = () => {

    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    }
    return (
        <View style= {{width: '100%'}}>
            <Button 
            title='open modal'
            onPress={handleModal}>
            </Button>
            <Modal
                visible={modal}
                animationType='slide'
                onShow={() => alert('안녕')}>
                    {/* modal창이 떴을때 트리거 되는 함수 */}
                <View style={{
                    marginTop: 60,
                    backgroundColor: 'blue',
                }}>
                    <Text style= {{
                        color: 'white'
                    }}>this is a modal</Text>
                </View>
                <Button 
                    title='X'
                    onPress={handleModal}>
                </Button>
            </Modal> 
        </View>
    )
}

export default ModalComp
