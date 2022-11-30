import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import InputItem from "./Component/InputItem"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        <InputItem />
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
})
