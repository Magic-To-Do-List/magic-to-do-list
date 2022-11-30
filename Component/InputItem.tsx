import { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native"

export default function InputItem() {
  const [item, setItem] = useState("")
  const [list, setList] = useState([])

  // const addItem = () => {
  //   setList()
  // }

  return (
    <View>
      <View>
        <Text style={styles.title}>What do you want to do?</Text>
        <TextInput
          value={item}
          onChangeText={setItem}
          style={styles.input}
          placeholder='Put an item'
        />
        {/* <Button title='Add' onPress={() => addItem()} /> */}
      </View>
      {/* <FlatList data={a}/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: "white",
  },
  input: {
    color: "black",
    height: 40,
    backgroundColor: "white",
  },
})
