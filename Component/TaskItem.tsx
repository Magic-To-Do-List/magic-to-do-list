import React from "react"
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native"

function TaskItem(props: any) {
  return (
    <View style={styles.listContainer}>
      <View style={styles.number}>
        <Text style={styles.text}>{props.index + 1}</Text>
      </View>
      <View>
        <Text style={styles.text}>{props.task}</Text>
      </View>
      <Button title='Remove' />
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
  },
  text: {
    color: "white",
  },
  number: {
    color: "white",
    width: "20%",
    height: "100%",
    backgroundColor: "blue",
  },
})

export default TaskItem
