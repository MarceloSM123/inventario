import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="componente 1"/>
      <Button title="componente 2" color="blue"/>
      <Button title="componente 3"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //flexDirection:"row",// direccion principal columnas
    flexDirection:"column",// direccion principal columnas
   // column es el valor por defecto en flexdirection

   //JUSTIFYCONTENT : AFECTA LA DISTRIBUCION DE COMPONENTES EN EL EJE PRINCIPAL
   //justifyContent:"center"  // CENTRA EL CONTENIDO
   justifyContent:"space-between",//DEJA ESPACIOS ENTRE LOS COMPONENTES

    // ALIGNIITEMS: AFECTA A LA DISTRIBUCION DEL EJE SECUNDARIO

    //alignItems:"center" // alineados al centro
   alignItems:"flex-start"
  },
});
