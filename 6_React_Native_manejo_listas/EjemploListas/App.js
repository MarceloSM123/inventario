import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Alert, Text, View,FlatList,TextInput,Button  } from 'react-native';
import {useState} from 'react'
export default function App() {
  // indica sis se esta creando una nueva persona o se esta modificando una existente
  //let esNuevo=true;
  const [esNuevo,SetEsNuevo]=useState(true);
  // 
  //let indiceSeleccionado=-1;
  const [indiceSeleccionado,SetIndiceSeleccionado]=useState();
  const [txtCedula,SetTxtCedula]=useState();
  const [txtNombre,SetTxtNombre]=useState();
  const [txtApellido,SetTxtApellido]=useState();
  let p = [
    {nombre: 'Thor', apellido: 'Thillas', cedula: '0242342342'},
    {nombre: 'Amber', apellido: 'Flores', cedula: '172312313'},
    {nombre: 'Amber', apellido: 'Parker', cedula: '076123233'},
];
let [personas,SetPersonas]=useState([
    {nombre: 'Thor', apellido: 'Thillas', cedula: '0242342342'},
    {nombre: 'Amber', apellido: 'Flores', cedula: '172312313'},
    {nombre: 'Amber', apellido: 'Parker', cedula: '076123233'},
]);


  let limpiar=()=>{
    SetTxtCedula(null);
    SetTxtNombre(null);
    SetTxtApellido(null);
  };

let existePersona=()=>{
  for(let i=0;i<personas.length;i++){
    if(personas[i].cedula==txtCedula){
      return true;
    }else{
      return false;
    }
  }
}

  let guardarPersona=()=>{
    if(esNuevo){
      if(existePersona()){
        Alert.alert("INFO","Ya existe una persona con esa cedula"+txtCedula);
      }else{
    let persona=[{nombre: txtNombre, apellido: txtApellido, cedula: txtCedula}];
    SetPersonas(personas.concat(persona));
   //setPersonas([...personas, persona]);
    console.log("Personas:",personas);}
    
    }else{
      console.log("modificar");
       console.log(indiceSeleccionado);
      personas[indiceSeleccionado].nombre=txtNombre;
      personas[indiceSeleccionado].apellido=txtApellido;
      SetPersonas(personas);
      SetEsNuevo(true);
    }
    limpiar();
    
  };
  let ItemPersona=(props)=>{
    return (
          <View style={styles.itemPersona}>
            <View style={styles.itemIndice}>
              <Text > {props.indice}</Text>
            </View>
            <View style={styles.itemContenido}>
              <Text >  {props.persona.nombre} {props.persona.apellido} </Text>
           
            <Text style={styles.textoSecundario}> {props.persona.cedula} </Text>
            </View>
            <View  style={styles.itemBotones}>
              <Button
              title="C"
              color="sienna"
              onPress={()=>{
                console.log("datos: ", props.persona)
                SetTxtCedula(props.persona.cedula);
                SetTxtNombre(props.persona.nombre);
                SetTxtApellido(props.persona.apellido);
                SetEsNuevo(false);
                SetIndiceSeleccionado(props.indice);
              }}
              />
              <Button
              title="X"
              color="springgreen"
              onPress={()=>{
                SetIndiceSeleccionado(props.indice);
                personas.splice(indiceSeleccionado,1);
                SetPersonas(personas);
              }}
              />
            </View>
          </View>
        )
  }
  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}>
      <Text>PERSONAS</Text>
      <TextInput
      style={styles.txt}
      value={txtCedula}
      placeholder='Ingrese su cedula'
      onChangeText={SetTxtCedula}
      keyboardType='numeric'
      editable={esNuevo}
      />

      <TextInput
      style={styles.txt}
      value={txtNombre}
      placeholder='Ingrese su nombre'
      onChangeText={SetTxtNombre}
      />

      <TextInput
      style={styles.txt}
      value={txtApellido}
      placeholder='Ingrese su apellido'
      onChangeText={SetTxtApellido}
      />

      <View style={styles.areaBotones} >
        <Button 
        title='GUARDAR'
        onPress={
          guardarPersona}

        />
        <Button 
        title='NUEVO'
        onPress={limpiar}
        
        />


      </View >

      </View>
      {/*
      <FlatList 
      //style={styles.lista}
      data={personas}
      renderItem={(elemento)=>{
        return <Text> soy un elemento cualquiera </Text>
      }}
      />*/}
      <View style={styles.areaContenido}>
      <FlatList 
      style={styles.lista}
      data={personas}
      renderItem={(elemento)=>{
        /*{return (
          <View style={styles.itemPersona}>
            <View style={styles.itemIndice}>
              <Text > {elemento.index}</Text>
            </View>
            <View style={styles.itemContenido}>
              <Text >  {elemento.item.nombre} {elemento.item.apellido} </Text>
           
            <Text style={styles.textoSecundario}> {elemento.item.cedula} </Text>
            </View>
          </View>
        );}*/
        return <ItemPersona
        indice={elemento.index}
        persona={elemento.item}

        />
      }}
      keyExtractor={(item)=>{
        return item.cedula;
      }}
      />
      </View>
      <View style={styles.piePagina}>
      <Text> AUTOR: Marcelo Salcedo </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    paddingTop: 50,
    paddingHorizontal:10

  },
  lista:{
  //  backgroundColor:"lightpink",
  },

  itemPersona:{
    backgroundColor: "lemonchiffon",
    marginBottom:10,
    padding:10,
    flexDirection:"row",
  },

  textoPrincipal:{
    fontSize: 20,
  },

  textoSecundario:{
    fontStyle: "italic",
    fontSize:16
  },
  areaCabecera:{
    flex:5,
    backgroundColor: "chocalate",
  },
  areaContenido:{
    flex:9,
    backgroundColor: "darkorange",
  },

  piePagina:{
    flex:1,
    backgroundColor: "greenyellow ",
    justifyContent:"center",
    alignContent:"flex-end",
  },
  itemIndice:{
    flex:1,
    backgroundColor: "white ",
    flexDirection: "row",
    justifyContent:"center"
  },
  itemContenido:{
    paddingLeft:5,
    flex:5,
    backgroundColor: "saddlebrown ",
    flexDirection: "column",
     justifyContent:"center",
  },

  itemBotones:{
    backgroundColor: "darkorange ",
    flex:2,
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "space-between",

  },

  txt:{
    borderWidth:1,
    borderColor:"gray",
    paddingTop:5,
    paddingHorizontal:5,
    margin: 5,
  },

  areaBotones:{
    flexDirection: "row",
    justifyContent: "space-evenly"

  }

},)
