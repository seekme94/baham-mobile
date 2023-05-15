import { StyleSheet, Text, View } from "react-native";

export default function AppHeader(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>{props.heading}</Text>
      <Text style={styles.slogan}>{props.slogan}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 0.075,
    padding: 30,
  },
  heading: {
    padding: 5,
    fontSize: 30,
    textAlign: "center",
  },
  slogan: {
    padding: 5,
    fontSize: 18,
    textAlign: "center",
    fontStyle: "italic",
  },
});
