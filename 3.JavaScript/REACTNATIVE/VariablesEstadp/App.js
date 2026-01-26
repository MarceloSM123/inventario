
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';
import{useState} from 'react'

export default function App() {
  /*const arreglo=useState(0);
  const contadorEstado=arreglo[0];
  const setContadorEstado=arreglo[1];*/
  const [contadorEstado,setContadorEstado]=useState(0);
  const [vidas,setVidas]=useState(5);
  let premiar=()=>{
    setVidas(vidas+3);
  }
  let perderVida=()=>{
    if(vidas==0){
      Alert.alert("ADVERTENCIA", "  GAME OVER " );
      //setVidas(vidas=0);
    }else{
      setVidas(vidas-1);
    }
  }
  //let contador=0;
  const incrementar=()=>{
    /*contador=contador+1;
    console.log("CONTADOR>>>>"+contador);*/
    setContadorEstado(contadorEstado+1);
    console.log("contadorEstado>>>"+contadorEstado);

  }

  const decrementar=()=>{
    setContadorEstado(contadorEstado-1);
    console.log("contadorEstado>>>"+contadorEstado);
  }



  return (
    <View style={styles.container}>
      <Text>Variables de Estado  </Text>
      <Text> CONTADOR: {contadorEstado}</Text>
      <Text> VIDAS: {vidas}</Text>
      <Button 
        title="INCREMENTAR"
        onPress={incrementar}
      />

      <Button 
        title="DECREMENTAR"
        onPress={decrementar}
      />

      <Button 
        title="PERDER VIDA"
        onPress={perderVida}
      />

      <Button 
        title="PREMIAR"
        onPress={premiar}
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
});
