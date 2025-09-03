import { useState } from "react";
import { FlatList, StyleSheet, View } from 'react-native';
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

const App = () => {
  const [goals, setGoals] = useState([])

  const handleAddGoal = (text) => {
    if (!text) alert("Enter a goal.")
    else setGoals((prev) => [...prev, {text, id: Math.random().toString()}])
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={handleAddGoal}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) =>  <GoalItem text={itemData.item.text} />}
        />
      </View>
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    backgroundColor: "#ffffff",
    height: "100%"
  },
  placeholderContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  goalsContainer: {
    flex: 5,
    padding: 16,
    gap: 8
  }
});
