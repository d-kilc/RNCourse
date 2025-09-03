import { useState } from "react"
import { StyleSheet, TextInput, Button, View } from "react-native"

const GoalInput = ({onAddGoal}) => {
  const [enteredGoalText, setEnteredGoalText] = useState("")

  const handleChangeText = (value) => setEnteredGoalText(value)

  const handleAddGoal = () => {
    onAddGoal(enteredGoalText)
    setEnteredGoalText("")
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your text here..."
        style={styles.textInput}
        onChangeText={handleChangeText}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={handleAddGoal}/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    borderRadius: 10,
    padding: 8
  },
})

export default GoalInput