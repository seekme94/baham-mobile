import { StyleSheet, Text, View } from "react-native";

export default function AppFooter(props) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{props.heading}</Text>
        <Text style={styles.heading}>{props.heading1}</Text>
        <Text style={styles.heading}>{props.heading2}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: "red",
    alignItems: "center",
  },
  heading: {
    fontStyle: "italic",
    color: "white",
  },
});
