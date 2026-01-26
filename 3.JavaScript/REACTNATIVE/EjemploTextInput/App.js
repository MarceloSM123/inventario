import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View,Button } from 'react-native';
import {useState} from 'react'

export default function App() {
 // let nombre="Ingrese su nombre"
 const[nombre,setNombre]= useState("ingrese su nombre")
 const[apellido,setApelido]= useState("ingrese su apellido")
 const[nombreCompleto, setNombreCompleto]=useState("")
 return (
    <View style={styles.container}>
      <Text>TEXT INPUT</Text>
      <Text> Hola  {nombreCompleto}</Text>
      <TextInput
        style={styles.cajaTexto}
        value={nombre}
        onChangeText={(txt)=>{
          console.log(" valor: "+txt)
          setNombre(txt);
        }}
      /> 

      <TextInput
        style={styles.cajaTexto}
        value={apellido}
        onChangeText={(txt)=>{
          console.log(" valor: "+txt)
          setApelido(txt);
        }}
      /> 

      <Button
        title="saludar"
        onPress={()=>{
          let completo = nombre+" "+apellido;
          setNombreCompleto(completo);
        }}
      />
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
