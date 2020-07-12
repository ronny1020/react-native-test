import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function AddItem(props) {
  const [text, setText] = useState('')
  const onChange = (textValue) => setText(textValue)

  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          props.addItem(text)
          setText('')
        }}
      >
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 64,
    padding: 8,
    margin: 4,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 8,
    margin: 4,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 16,
    textAlign: 'center',
  },
})
