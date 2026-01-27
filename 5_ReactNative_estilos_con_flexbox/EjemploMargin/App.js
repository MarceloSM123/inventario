import { StatusBar } from 'expo-status-bar';
import { TextInput,StyleSheet, Text, View,Button } from 'react-native';
import {useState} from 'react'
export default function App() {
  const [nombre,setNombre]=useState();
  const [apellido,setApellido]=useState();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>  EJEMPLO MARGIN  </Text>
      <TextInput 
      style={styles.caje}
      value={nombre}
      onChangeText={setNombre}
      placeholder='Ingrese su nombre'
      />

       <TextInput 
        style={styles.caje}
      value={apellido}
      onChangeText={setApellido}
        placeholder='Ingrese su apellido'
      />
      <Button 
      title="OK"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
    alignItems:'stretch',
    justifyContent: 'center',
    paddingHorizontal:10
  },
  caje:{
    borderColor:'gray',
    borderWidth: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  titulo:{
    fontSize:14,
    marginBottom:10,
    fontWeight:'heavy',
    alignContent:'center'
  }
});
