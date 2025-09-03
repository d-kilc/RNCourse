import { StyleSheet, View, Text } from "react-native";

const GoalItem = ({text}) => {
  return (
    <View style={styles.goal}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  goal: {
    borderRadius: 6,
    padding: 8,
    backgroundColor: "#5e0acc",
    margin: 5
  },
  goalText: {
    color: "#ffffff"
  }
})

export default GoalItem