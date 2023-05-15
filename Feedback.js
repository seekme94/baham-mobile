import { TextInput, View, Button, StyleSheet } from "react-native";
import { useState } from "react";

const Feedback = () => {
  const [value, onChangeText] = useState("Add Your FeedBack Here");
  return (
    <View>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        onChangeText={(text) => onChangeText()}
        value={value}
        style={styles.feedback}
      />

      <Button title="Submit Feedback" color="maroon" />
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  feedback: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    borderColor: "black",
    borderStyle: "solid",
    backgroundColor: "white",
    marginBottom:10
  },
});
