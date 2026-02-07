import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';


function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> HOME</Text>
            <View style={styles.botones}>
                <Button
                    title="Contactos"
                    onPress={() => navigation.navigate('ContactsNav')}
                />
                <Button
                    title="Productos"
                    onPress={() => navigation.navigate('ProdNav')}
                />
            </View>
        </View>
    );
}


function ContactsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CONTACTOS</Text>
            <Button
                title="Volver a HOME"
                onPress={() => navigation.navigate('HomeNav')}
            />
        </View>
    );
}


function ProductosScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> PRODUCTOS</Text>
            <Button
                title="Volver a HOME"
                // Cambiado para navegar al Tab de Inicio
                onPress={() => navigation.navigate('InicioTab')}
            />
        </View>
    );
}


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="HomeNav">
            <Stack.Screen 
                name="HomeNav" 
                component={HomeScreen}
                options={{ 
                    title: 'Inicio',
                }}
            />
            <Stack.Screen 
                name="ContactsNav" 
                component={ContactsScreen}
                options={{ title: 'Contactos' }}
            />
            <Stack.Screen 
                name="ProdNav" 
                component={ProductosScreen}
                options={{ title: 'Productos' }}
            />
        </Stack.Navigator>
    );
}


function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="InicioTab"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    
                    if (route.name === 'InicioTab') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'ProductosTab') {
                        iconName = focused ? 'cube' : 'cube-outline';
                    }
                    
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#3498db',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    paddingBottom: 5,
                    height: 60,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 5,
                },
                headerShown: false, 
            })}
        >
            <Tab.Screen 
                name="InicioTab" 
                component={StackNavigator}
                options={{ 
                    title: 'Inicio',
                }}
            />
            <Tab.Screen 
                name="ProductosTab" 
                component={ProductosScreen}
                options={{ 
                    title: 'Productos',
                }}
            />
        </Tab.Navigator>
    );
}


function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="MainTabs"
            screenOptions={{
                drawerActiveTintColor: '#3498db',
                drawerInactiveTintColor: '#333',
                headerShown: true,
            }}
        >
            <Drawer.Screen 
                name="MainTabs" 
                component={TabNavigator}
                options={{
                    title: 'Inicio',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                    headerTitle: "NAVEGACION DRAWER",
                }}
            />
            <Drawer.Screen 
                name="ProductosDrawer" 
                component={ProductosScreen}
                options={{
                    title: 'Productos',
                    
                    headerTitle: 'Productos',
                }}
            />
        </Drawer.Navigator>
    );
}


export default function App() {
    return (
        <NavigationContainer>
            <DrawerNavigator />
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    botones: {
        flexDirection: 'row',
        gap: 20,
    }
});