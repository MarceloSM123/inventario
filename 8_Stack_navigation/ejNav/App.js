// App.js - TODO EN UN ARCHIVO
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Componente HomeScreen
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
            <StatusBar style="auto" />
        </View>
    );
}

// Componente ContactsScreen
function ContactsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>📞 CONTACTOS</Text>
            <Button
                title="Volver a HOME"
                onPress={() => navigation.navigate('HomeNav')}
            />
        </View>
    );
}

// Componente ProductosScreen
function ProductosScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>📦 PRODUCTOS</Text>
            <Button
                title="Volver a HOME"
                onPress={() => navigation.navigate('HomeNav')}
            />
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeNav">
                <Stack.Screen 
                    name="HomeNav" 
                    component={HomeScreen}
                    options={{ title: 'Inicio' }}
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