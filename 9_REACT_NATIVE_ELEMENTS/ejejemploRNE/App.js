import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import {Button, Icon, Input} from '@rneui/themed'
//import { Input } from '@rneui/themed';
import {useState} from 'react'
export default function App() {
  const [name,setName]=useState();
  return (
    <View style={styles.container}>
      <Text>RNE</Text>
      <Input
      value={name}
      onChangeText={setName}
      placeholder="ingrese su nombre"
      label="nombre"
      />
      <Text>{name}</Text>
      
      <Button
      title="ok"
      icon={{
                name: 'reddit',
                type: 'zocial',
                size: 15,
                color: 'white',
              }}
      onPress={()=>{
        Alert.alert("INFO","Su nombre es "+name)
      }}
      />

      <Button
      title="setting"
      icon={<Icon
      name= 'tik-tok'
      type= 'AntDesign'
     // size= '15'
      color= 'white'
      />}
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
