import { createDrawerNavigator } from '@react-navigation/drawer'
import Menu from './Menu'
import { NavigationContainer } from '@react-navigation/native';
import setting from './setting';
import about from './about';
import home from './home';
const Drawer= createDrawerNavigator();

const NavigationDrawer=()=> {
    return(

    <Drawer.Navigator>
        <Drawer.Screen component={Menu} options={{headerShown: true}} />
        <Drawer.Screen component={setting} options={{headerShown: true}} />
        <Drawer.Screen component={about} options={{headerShown: true}} />
        <Drawer.Screen component={home} options={{headerShown: true}} />
    </Drawer.Navigator>

    )
}

export default NavigationDrawer;