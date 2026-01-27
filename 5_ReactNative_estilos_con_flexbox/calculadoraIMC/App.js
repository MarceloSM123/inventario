import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import {useState} from 'react'
export default function App() {
  const [peso,setPeso]=useState();
  const [estatura,setEstatura]=useState();
  const [resultado1,SetResultado1]=useState();
  const [resultado2,SetResultado2]=useState();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CALCULADORA IMC</Text>

      <TextInput 
      style={styles.caje}
      value={peso}
      onChangeText={setPeso}
      placeholder='Ingrese su peso (Kg)'
      />

      <TextInput 
      style={styles.caje}
      value={estatura}
      onChangeText={setEstatura}
      placeholder='Ingrese su estatura (m)'
      />
      <Button 
     // style={styles.boton}
      title="CALCULAR"
      onPress={()=>{
        let imc=parseFloat(peso)/(parseFloat(estatura)*parseFloat(estatura));
        SetResultado1(imc.toFixed(2));

          if (imc < 18.5) {
  SetResultado2("Su peso es inferior al normal.");
} else if (imc >= 18.5 && imc < 25) {
  SetResultado2("Su peso es normal."); 
} else if (imc >= 25 && imc < 30) {
  SetResultado2("Su peso es superior al normal.");
} else if (imc >= 30) {
  SetResultado2("Tiene obesidad.");
}
      }}
      style={styles.boton}
      />

      <Text style={styles.resultados}>Su IMC es : {resultado1}</Text>
      <Text style={styles.resultados}>{resultado2}</Text>
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
  caje:{
    borderColor:'gray',
    borderWidth: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
   titulo:{
    fontSize:24,
    marginBottom:10,
    fontWeight:'heavy',
    alignContent:'center'
  },
  resultados:{
    fontSize:19,
    marginBottom:10,
    fontWeight:'bold',
    alignContent:'center'
  },

  boton:{
    borderColor:'gray',
    color:"#000000"
  }
});
