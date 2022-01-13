import React, {useState, useRef} from 'react'
import { View, Text, StyleSheet, ScrollView, Button, TextInput} from 'react-native'
import { Picker } from '@react-native-picker/picker'
const PickerComp = () => {

    const [selectedLanguage, setSelectedLanguage] = useState();
    return(
        <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        </Picker>
    )

}
const styles = StyleSheet.create({
});

export default PickerComp
