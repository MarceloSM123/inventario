import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
          <Button title="X" color="#525252" />
          <Button title="Y" color="#525252" />
          <Button title="Z" color="#525252" f/>
      </View>
      <View style={styles.container2}>
        
      <View style={styles.container2_1}>
          <View style={styles.container2_1_1}>
            <Button title="BOTON 1" color="#127991" />
            <Button title="BOTON 2" color="#127991" />
          </View>
          <View style={styles.container2_1_2}>
            <Button title="OPERACION 1" color="#525252" />
            <Button title="OPERACION 2" color="#525252" />
            <Button title="OPERACION 3" color="#525252" />
          </View>
      </View>
      <View style={styles.container2_2}>
        <Button title="ACCION 1" color="#525252" />
          <Button title="ACCION 2" color="#525252" />
      </View>

      </View>
      <View style={styles.container3}>
        <Button title="BOTON FINAL" color="#525252" />
      </View>
      
      
      
      
      <StatusBar style="auto" />

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
    container1: {
    flex: 1,
    flexDirection: "row",
    justifyContent:"flex-end",
    alignItems:"center",
    backgroundColor: 'rgb(3, 192, 250)',
  },
  
    container2: {
    flex: 6,

    backgroundColor: '#16db34',
  },
  
    container3: {
    flex: 1,
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"flex-start",
    backgroundColor: '#e0930d',
  },
      container2_1: {
    flex: 4,
    flexDirection: "row",
    backgroundColor: '#db16aa',
  },

       container2_2: {
    flex: 1,
    flexDirection: "row",
    justifyContent:"center",
    alignItems:"flex-end",
    backgroundColor: '#180a85',
  },

        container2_1_1: {
    flex: 1,
    flexDirection: "column",
    justifyContent:"space-evenly",
    alignItems:"stretch",
    backgroundColor: '#e5f507',
  },
          container2_1_2: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"flex-start"
  },

});
