import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SectionList,
} from "react-native";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import Feedback from "./Feedback";

const allVehicles = [
  {
    type: "Toyota",
    data: [
      { id: 1, name: "Toyota Avalon", capacity: 4 },
      { id: 2, name: "Toyota Camry", capacity: 4 },
      { id: 3, name: "Toyota Corolla", capacity: 5 },
      { id: 4, name: "Toyota Passo", capacity: 4 },
      { id: 5, name: "Toyota Hiace", capacity: 4 },
      { id: 6, name: "Toyota Prius", capacity: 4 },
      { id: 7, name: "Toyota Yaris", capacity: 4 },
      { id: 8, name: "Toyota Fortuner", capacity: 4 },
      { id: 9, name: "Toyota Hilux", capacity: 4 },
    ],
  },
  {
    type: "Suzuki",
    data: [
      { id: 10, name: "Suzuki Mehran", capacity: 5 },
      { id: 11, name: "Suzuki Khyber", capacity: 4 },
      { id: 12, name: "Suzuki Swift", capacity: 4 },
      { id: 13, name: "Suzuki Alto", capacity: 4 },
      { id: 14, name: "Suzuki Bolan", capacity: 4 },
      { id: 15, name: "Suzuki Liana", capacity: 4 },
      { id: 16, name: "Suzuki Cultus", capacity: 4 },
      { id: 17, name: "Suzuki Wagon-R", capacity: 4 },
    ],
  },
  {
    type: "Daihatsu",
    data: [
      { id: 16, name: "Daihatsu Cuore", capacity: 5 },
      { id: 17, name: "Daihatsu Mira", capacity: 5 },
      { id: 18, name: "Daihatsu Hijet", capacity: 9 },
      { id: 19, name: "Daihatsu Move", capacity: 6 },
    ],
  },
];

export default function App() {
  // Render the headers of section. Note that the input prop is section and we're using 'type' attribute inside
  const renderSectionHeader = ({ section }) => {
    return <Text>{section.type}</Text>;
  };

  // Render each menu item
  const renderVehicleModelItem = ({ item }) => {
    return (
      <View>
        <Text>
          {item.name} <Text>{"->"}</Text> ({item.capacity})
        </Text>
      </View>
    );
  };

  // Separator separates items. We're only using an empty view with border for now
  const itemSeparatorComponent = () => <View style={styles.list}></View>;

  return (
    <View style={styles.container}>
      <AppHeader heading="Baham" slogan="Reducing your carbon footprint..." />
      <View style={styles.mainContainer}>
        <SectionList
          sections={allVehicles}
          renderItem={renderVehicleModelItem}
          renderSectionHeader={renderSectionHeader}
          ItemSeparatorComponent={itemSeparatorComponent}
          keyExtractor={(item, index) => item.id * (item.id + index)}
        />
      </View>
      <Feedback />
      <AppFooter
        heading="Copyright: Baham by project Dareecha (2023) -"
        heading1="Karachi Insitute of Economics & Technology"
        heading2="Create By Zain Kanji"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "gold",
  },
  mainContainer: {
    flex: 0.90,
    backgroundColor: "white",
  },
  menuItem: {
    textAlign: "center",
    margin: 12,
    fontSize: 16,
    color: "maroon",
  },
  list: {
    borderColor: "green",
    borderStyle: "solid",
    borderWidth: 2,
    marginBottom: 15,
  },
});
