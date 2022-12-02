import React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { Button } from "@react-native-material/core"

function TaskItem(props: any) {
  return (
    <View style={styles.listContainer}>
      <View style={styles.number}>
        <Text style={styles.text}>{props.index + 1}</Text>
      </View>
      <View style={styles.listText}>
        <Text style={styles.text}>{props.task}</Text>
      </View>
      <View>
        <Button title='Remove' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    // flex: 6,
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
    // flex: 1,
  },
  listText: {
    flex: 4,
  },
})

export default TaskItem
