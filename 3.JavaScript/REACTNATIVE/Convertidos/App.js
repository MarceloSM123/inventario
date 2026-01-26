import { StatusBar } from 'expo-status-bar';
import { TextInput,Button,StyleSheet, Text, View } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [dolares,setDolares]=useState("Dolares")
  const [cambio,setCambio]=useState("")
  return (
    <View style={styles.container}>
      <Text>CONVERTIDOR</Text>

      <TextInput 
      style={styles.cajaTexto}
        value={dolares}
        onChangeText={(txt)=>{
          console.log(" valor: "+txt)
          setDolares(txt);
        }}
      />

      <Button
        title="Cambio a pesos Mexicanos"
        onPress={()=>{
         let cambio = parseFloat(dolares)*17.50;
          setCambio(cambio);
        }}/>

      <Button
        title="Cambio a pesos Colombianos"
        onPress={()=>{
         let cambio = parseFloat(dolares)*4000;
          setCambio(cambio);
        }}/>
      <Button
        title="Cambio a Euros"
        onPress={()=>{
         let cambio = parseFloat(dolares)*0.92;
          setCambio(cambio);
        }}/>

      <Text>RESULTADO: {cambio}</Text>
      <StatusBar style="auto" />
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
  cajaTexto:{
    borderColor:"black",
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal: 10
  }
});
