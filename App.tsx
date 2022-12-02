import { StatusBar } from "expo-status-bar"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
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
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>What do you want to do?</Text>
        <InputItem addTask={addTask} />
      </View>
      <View>
        {/* <View style={styles.list}> */}
        {tasks.map((task, index) => {
          return <TaskItem task={task} index={index} />
        })}
      </View>
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "white",
    flexDirection: "column",
    paddingTop: 100,
  },
  title: {
    color: "white",
  },
  // list: {
  //   display: "flex",
  //   flexDirection: "column",
  // },
})
