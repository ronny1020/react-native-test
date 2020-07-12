import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import AddItem from './components/AddItem'
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

  const [newId, setNewId] = useState(3)

  const deleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  const addItem = (text) => {
    setItems([
      ...items,
      {
        id: newId,
        text: text,
      },
    ])
    setNewId(newId + 1)
  }

  return (
    <View style={styles.container}>
      <Header title="Memo List" />
      <Text style={styles.todoListTitle}>My Todo List</Text>
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
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
