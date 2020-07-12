import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 64,
    padding: 16,
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
})
