import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import InputItem from "./Component/InputItem"
import React, { useState, Dispatch } from "react"
import TaskItem from "./Component/TaskItem"

export default function App() {
  const [tasks, setTasks] = useState<string[]>([])
  // interface TaskState {
  //   tasks: array
  //   task: string
  // }

  const addTask = (task: any) => {
    if (task == null) return
    setTasks([...tasks, task])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        <Text style={styles.title}>What do you want to do?</Text>
        {tasks.map((task) => {
          return (
            <View>
              <TaskItem task={task} />
            </View>
          )
        })}
        <InputItem addTask={addTask} />
      </Text>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "white",
  },
  textContainer: {
    color: "white",
  },
  title: {
    color: "white",
  },
})
