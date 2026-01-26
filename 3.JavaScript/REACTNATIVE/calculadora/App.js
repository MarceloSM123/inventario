import { StatusBar } from 'expo-status-bar';
import { TextInput,Button,StyleSheet, Text, View } from 'react-native';
import {useState} from 'react'
export default function App() {
  const [numero1,setNumero1]=useState("numero 1")
  const [numero2,setNumero2]=useState("numero 2")
  const [resultado,setResultado]=useState("")
  return (
    <View style={styles.container}>
      <Text>CALCULADORA</Text>
      <TextInput 
      style={styles.cajaTexto}
        value={numero1}
        onChangeText={(txt)=>{
          console.log(" valor: "+txt)
          setNumero1(txt);
        }}
      />

      <TextInput 
      style={styles.cajaTexto}
        value={numero2}
        onChangeText={(txt)=>{
          console.log(" valor: "+txt)
          setNumero2(txt);
        }}
      />

      <Button
        title="SUMAR"
        onPress={()=>{
          let resultado = parseFloat(numero1)+parseFloat(numero2);
          setResultado(resultado);
        }}
      />
       <Button
        title="RESTAR"
        onPress={()=>{
          let resultado = parseFloat(numero1)-parseFloat(numero2);
          setResultado(resultado);
        }}
      />
       <Button
        title="MULTIPLICAR"
        onPress={()=>{
          let resultado = parseFloat(numero1)*parseFloat(numero2);
          setResultado(resultado);
        }}
      />
      <Text>Resultado: {resultado}</Text>


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
