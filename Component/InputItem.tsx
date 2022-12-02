import { useState } from "react"
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native"
import { Button } from "@react-native-material/core"

export default function InputItem({ addTask }: any) {
  const [task, setTask] = useState("")

  const handleAdd = () => {
    addTask(task)
    setTask("")
  }

  return (
    <View>
      <TextInput
        value={task}
        onChangeText={setTask}
        style={styles.input}
        placeholder='Put an item'
      />
      <Button title='Add' onPress={handleAdd} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    color: "black",
    height: 40,
    backgroundColor: "white",
  },
})
