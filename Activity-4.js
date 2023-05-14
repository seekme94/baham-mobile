import { ScrollView, Text, View } from 'react-native';

const vehicleModels = ['Toyota Avalon', 'Toyota Camry', 'Toyota Corolla', 'Toyota Passo', 'Toyota Hiace', 'Toyota Prius', 'Toyota Yaris', 'Toyota Fortuner', 'Toyota Hilux', 'Honda City', 'Honda Civic', 'Honda Grace', 'Honda Fit', 'Honda Accord', 'Honda Vezel', 'Suzuki Mehran', 'Suzuki Khyber', 'Suzuki Swift', 'Suzuki Alto', 'Suzuki Bolan', 'Suzuki Liana', 'Suzuki Cultus', 'Suzuki Wagon-R', 'Daihatsu Cuore', 'Daihatsu Mira', 'Daihatsu Hijet', 'Daihatsu Move']

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: 'space-between', backgroundColor: 'gold'}}>
      <View>
          <Text style={{padding: 20, fontSize: 30, textAlign: 'center' }}>Baham</Text>
          <Text style={{padding: 10, fontSize: 18, textAlign: 'center', fontStyle: 'italic' }}>Reducing your carbon footprint...</Text>
      </View>
      <ScrollView 
          indicatorStyle={'white'}
          horizontal={false}
          style={{padding: 20, backgroundColor: 'beige'}}
      >
      { vehicleModels.map((item, index) => (<Text key={index} style={{fontSize: 22}}>{index + 1} - {item}</Text>)) }
      </ScrollView>

      <View style={{flex: 0.075}}>
        <Text sylte={{textAlign: 'auto'}}>Copyright: Baham by project Dareecha (2023) - 
            <Text style={{fontStyle: 'italic'}}>Karachi IE & T</Text>
        </Text>
      </View>
    </View>
  );
}
