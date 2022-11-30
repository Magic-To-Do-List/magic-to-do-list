import React from "react"
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native"

function TaskItem(props: any) {
  return (
    <View>
      <View>
        <Text>{props.index}</Text>
      </View>
      <View>
        <Text>{props.task}</Text>
        <Button title='Remove' />
      </View>
    </View>
  )
}

export default TaskItem
