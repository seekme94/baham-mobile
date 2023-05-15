import { FlatList, ScrollView, StyleSheet, Text, View, SectionList, TextInput, Button } from 'react-native';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Login from './Login';

const allVehicles = [
    {
        "type": "Sedan",
        "data": [
            { 'id': 1, 'name': "Honda City", 'capacity': 4 },
            { 'id': 2, 'name': "Honda Civic", 'capacity': 4 },
            { 'id': 3, 'name': "Honda Accord", 'capacity': 5 },
            { 'id': 4, 'name': "Toyota Corolla", 'capacity': 4 },
            { 'id': 5, 'name': "Toyota Camry", 'capacity': 4 },
            { 'id': 6, 'name': "Toyota Prius", 'capacity': 4 },
        ],
    },
    {
        "type": "Hatch back",
        "data": [
            { 'id': 7, 'name': "Honda Fit", 'capacity': 5 },
            { 'id': 8, 'name': "Suzuki Mehran", 'capacity': 4 },
            { 'id': 9, 'name': "Suzuki Alto", 'capacity': 4 },
            { 'id': 10, 'name': "Suzuki Cultus", 'capacity': 4 },
            { 'id': 11, 'name': "Suzuki Wagon R", 'capacity': 4 },
            { 'id': 12, 'name': "Suzuki Swift", 'capacity': 4 },
            { 'id': 13, 'name': "Toyota Vitz", 'capacity': 4 },
            { 'id': 14, 'name': "Toyota Passo", 'capacity': 4 },
            { 'id': 15, 'name': "Hyundai Santro", 'capacity': 4 },
        ]
    },
    {
        "type": "SUV",
        "data": [
            { 'id': 16, 'name': "Hyundai Tucson", 'capacity': 5 },
            { 'id': 17, 'name': "Kia Sportage", 'capacity': 5 },
            { 'id': 18, 'name': "Toyota Hilux", 'capacity': 9 },
            { 'id': 19, 'name': "Toyota Land Cruiser", 'capacity': 6 },
        ]
    },
    {
        "type": "Motorcycle",
        "data": [
            { 'id': 20, 'name': "Kawasaki GTO110", 'capacity': 2 },
            { 'id': 21, 'name': "Suzuki GSX125", 'capacity': 2 },
            { 'id': 22, 'name': "Suzuki GS150", 'capacity': 2 },
            { 'id': 23, 'name': "Yamaha YBR125", 'capacity': 2 },
        ]
    },
    {
        "type": "Van",
        "data": [
            { 'id': 24, 'name': "Suzuki Bolan", 'capacity': 6 },
            { 'id': 25, 'name': "Toyota Hiace", 'capacity': 13 },
            { 'id': 26, 'name': "Hyundai Shehroz", 'capacity': 10 },
            { 'id': 27, 'name': "Kia Grand Carnival", 'capacity': 7 },
        ]
    }
]

export default function App() {

    const [footerText, setFooter] = useState('')
    const [sloganText, setSlogan] = useState('')
    const [headingText, setHeading] = useState('')
    const [inputText, setInput] = useState('')
    const footer = () => {
        return (
          <View style={styles.containerf}>
            <Text style={styles.footer}>
              {footerText}
              <Text style={{ fontStyle: 'italic' }}>{sloganText}</Text>
            </Text>
          </View>
        );
      };
      const header = () => {
        return (
          <View>
            <Text style={styles.header}>{headingText}</Text>
          </View>
        );
      };
    const handleSubmit = () => {
        // Perform any necessary actions with the feedback data
        console.log('Feedback:', inputText);
    };

    setFooter('Copyright: Baham by project Dareecha (2023) -     ')
    setSlogan('Karachi Insitute of Economics & Technology')
    setHeading(' Baham (باہم)')

    // Render the headers of section. Note that the input prop is section and we're using 'type' attribute inside
    const renderSectionHeader = ({ section }) => {
        return (<Text>{section.type}</Text>);
    };

    // Render each menu item
    const renderVehicleModelItem = ({ item }) => {
        return (
            <View>
                <Text>{item.name} ({item.capacity})</Text>
            </View>
        );
    }

    // Separator separates items. We're only using an empty view with border for now
    const itemSeparatorComponent = () => <View style={{ borderColor: 'black', borderStyle: "dotted", borderWidth: 1 }}></View>;

    return (
        // Demo: Section List
        <View style={styles.container}>
            {/* Attach header component */}
            {header()}
            <Login />
            <View style={styles.mainContainer}>
                <SectionList
                    sections={allVehicles}
                    renderItem={renderVehicleModelItem}
                    renderSectionHeader={renderSectionHeader}
                    ItemSeparatorComponent={itemSeparatorComponent}
                    keyExtractor={(item, index) => item.id * (item.id + index)}
                />
            </View>
            {/* Attach footer component */}
            {footer()}

            <TextInput
                onChangeText={(text) => setInput(text)}
                value={inputText}
                multiline={true}
                numberOfLines={40}

            />
            <Button title="Submit" onPress={handleSubmit} />

        </View>
    );
}

const styles = StyleSheet.create({
    containerf: {
        flex: 0.075,
        backgroundColor: 'fuchsia'
    },
    footer: {
        textAlign: 'auto',
    },
    header: {
        padding: 20,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black'
    },

    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'gold'
    },
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    menuItem: {
        textAlign: 'center',
        margin: 12,
        fontSize: 16,
        color: 'maroon'
    }
});
