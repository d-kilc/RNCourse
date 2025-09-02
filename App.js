import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("")
  const [goals, setGoals] = useState([])

  const handleChangeText = (value) => {
    setEnteredGoalText(value)
  }

  const handleAddGoal = () => {
    if (!enteredGoalText) alert("Enter a goal.")
    else {
      setGoals((goals) => [...goals, enteredGoalText])
    }
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your text here..."
          style={styles.textInput}
          onChangeText={handleChangeText}
          
        />
        <Button
          title="Add Goal"
          onPress={handleAddGoal}
        />
      </View>
      <View style={styles.goalsContainer}>
        { goals.length === 0
          ? <Text>Enter a goal.</Text>
          : (
            <FlatList
              data={goals.map((g) => ({ key: g }))}
            />
          )
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    // paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    height: "100%"
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
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
  goalsContainer: {
    flex: 5
  }
});
