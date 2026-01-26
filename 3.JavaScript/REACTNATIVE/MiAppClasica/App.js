import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Alert } from 'react-native';

export default function App() {
  const despedirse=()=>{
    Alert.alert("Mensaje", "        Chao")
  }
  return (
    <View style={styles.container}>
      <Text>Bienvenido al curso de RN</Text>
      <Text>Marcelo Salcedo</Text>
      <StatusBar style="auto" />
      <Button
        title="HOLA"
        onPress={()=>{Alert.alert("Mensaje","HOLA DESDE EL BOTON")}} // recibe una funcion que no recibe parametros y no retorna nada
      />

      <Button
      title="ADIOS"
      onPress={despedirse}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
