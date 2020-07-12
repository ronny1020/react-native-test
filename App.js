import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'

export default function App() {
  const [items, setItems] = useState([
    {
      id: 0,
      text: 'Learning react native',
    },
    {
      id: 1,
      text: 'Going to work',
    },
    {
      id: 2,
      text: 'Having a beer',
    },
  ])

  return (
    <View style={styles.container}>
      <Header title="Memo List" />
      <Text style={styles.todoListTitle}>My Todo List</Text>
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todoListTitle: {
    padding: 16,
    fontSize: 32,
  },
})
