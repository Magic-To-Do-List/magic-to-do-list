import { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native"

export default function InputItem({ addTask }: any) {
  const [task, setTask] = useState("")

  const handleAdd = () => {
    addTask(task)
    setTask("")
  }

  return (
    <View>
      <View>
        <TextInput
          value={task}
          onChangeText={setTask}
          style={styles.input}
          placeholder='Put an item'
        />
        <Button title='Add' onPress={handleAdd} />
      </View>
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
