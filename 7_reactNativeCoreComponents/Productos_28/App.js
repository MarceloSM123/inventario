import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,Modal,StyleSheet,Alert, Text, View,FlatList,TextInput,Button  } from 'react-native';
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
  const [txtPrecioCompra,SetTxtPrecioCompra]=useState();
  const [txtPrecioVenta,SetTxtPrecioVenta]=useState();

  const [modalVisible, setModalVisible] = useState(false);
const [indiceAEliminar, setIndiceAEliminar] = useState(-1);


  const precioVentaCalculado = (parseFloat(txtPrecioCompra || 0) * 1.20).toFixed(2);
 /* {let p = [
    {nombre: 'Thor', apellido: 'Thillas', cedula: '0242342342', precioCompra:},
    {nombre: 'Amber', apellido: 'Flores', cedula: '172312313'},
    {nombre: 'Amber', apellido: 'Parker', cedula: '076123233'},
];}*/
let [personas,SetPersonas]=useState([
    {nombre: "Doritos", apellido: 'Snacks', cedula: '100',precioCompra: 0.40,precioVenta: 0.45},
    {nombre: "Manicho", apellido: "Golosinas", cedula: '101',precioCompra:  0.20,precioVenta: 0.25},
    {nombre: "Coca-Cola", apellido: "Bebidas", cedula: '102',precioCompra:  0.80,precioVenta: 1.00},
    {nombre: "Galletas Oreo", apellido: "Golosinas", cedula: '103',precioCompra:  0.50,precioVenta: 0.65},
    {nombre: "Agua Mineral", apellido: "Bebidas", cedula: '104',precioCompra:  0.30,precioVenta: 0.50},
]);


  let limpiar=()=>{
    SetTxtCedula(null);
    SetTxtNombre(null);
    SetTxtApellido(null);
    SetTxtPrecioCompra(null);
    SetTxtPrecioVenta(null);
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
      //---------------
      if(txtNombre!=null & txtApellido!=null & txtCedula!=null & txtPrecioCompra!=null ){
      if(existePersona()){
        Alert.alert("INFO","Ya existe una persona con esa cedula"+txtCedula);
      }else{
    let persona=[{nombre: txtNombre, apellido: txtApellido, cedula: txtCedula,precioCompra: txtPrecioCompra,precioVenta: txtPrecioCompra*1.20}];
    SetPersonas(personas.concat(persona));
   //setPersonas([...personas, persona]);
    console.log("Personas:",personas);}
    }else{
      Alert.alert("INFO","Ingrese todos los campos");
    }
  //------------------------  
    }else{
      console.log("modificar");
       console.log(indiceSeleccionado);
      personas[indiceSeleccionado].nombre=txtNombre;
      personas[indiceSeleccionado].apellido=txtApellido;
      personas[indiceSeleccionado].precioCompra=txtPrecioCompra;
      personas[indiceSeleccionado].precioVenta=precioVentaCalculado;
      SetPersonas(personas);
      SetEsNuevo(true);
    }
    limpiar();
    
  };

  const confirmarEliminar = () => {
    if (indiceAEliminar !== -1) {
      // Crear nuevo array sin el elemento a eliminar
      const nuevasPersonas = personas.filter((_, index) => index !== indiceAEliminar);
      
      // Actualizar el estado
      SetPersonas(nuevasPersonas);
      
      // Si eliminamos el producto seleccionado, limpiar formulario
      if (indiceSeleccionado === indiceAEliminar) {
        limpiar();
      }
      
      console.log("Producto eliminado en índice:", indiceAEliminar);
    }
    
    // Cerrar el modal y resetear
    setModalVisible(false);
    setIndiceAEliminar(-1);
  };

  let ItemPersona=(props)=>{
    return (
          <View style={styles.itemPersona}>
            <View style={styles.itemIndice}>
              <Text > {props.persona.cedula}</Text>
            </View>
            <View style={styles.itemContenido}>
              <Text >  {props.persona.nombre}  </Text>
           
            <Text style={styles.textoSecundario}> {props.persona.apellido} </Text>
            </View>
            <View  style={styles.itemBotones}>
              
              <Text style={styles.textoSecundario}> {props.persona.precioVenta} </Text>
           <TouchableOpacity
  
             activeOpacity={0.5}
               onPress={() => {
              console.log("datos: ", props.persona);
              SetTxtCedula(props.persona.cedula);
               SetTxtNombre(props.persona.nombre);
              SetTxtApellido(props.persona.apellido);
              SetTxtPrecioCompra(props.persona.precioCompra);
              SetTxtPrecioVenta(props.persona.precioVenta.toFixed(2));
              SetEsNuevo(false);
              SetIndiceSeleccionado(props.indice);
    
               }}
              >
              <Text>EDITAR</Text>
            </TouchableOpacity>
             <Button
              title="X"
              color="springgreen"
            onPress={() => {
    // Guardar el índice de la persona a eliminar
             setIndiceAEliminar(props.indice);
    // Abrir el modal
            setModalVisible(true);
            }}
            />
            </View>
          </View>
          
        )
  }
  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}>
      <Text style={styles.titulo}>PRODUCTOS</Text>
      <TextInput
      style={styles.txt}
      value={txtCedula}
      placeholder='CODIGO'
      onChangeText={SetTxtCedula}
      keyboardType='numeric'
      editable={esNuevo}
      />

      <TextInput
      style={styles.txt}
      value={txtNombre}
      placeholder='NOMBRE'
      onChangeText={SetTxtNombre}
      />

      <TextInput
      style={styles.txt}
      value={txtApellido}
      placeholder='CATEGORIA'
      onChangeText={SetTxtApellido}
      />

      <TextInput
      style={styles.txt}
      value={txtPrecioCompra}
      placeholder='PRECIO DE COMPRA'
      keyboardType='numeric'
      onChangeText={SetTxtPrecioCompra}
      />

      <TextInput
      style={styles.txt}
      value={precioVentaCalculado.toString()}
      keyboardType='numeric'
      placeholder='PRECIO DE VENTA'
      onChangeText={SetTxtPrecioVenta}
      editable={false} 
      pointerEvents="none"
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalFondo}>
          <View style={styles.modalContenedor}>
            <Text style={styles.modalTitulo}>Confirmar Eliminación</Text>
            
            <Text style={styles.modalMensaje}>
              ¿Está seguro que quiere eliminar este producto?
            </Text>
            
            <View style={styles.modalBotones}>
              <Button
                title="Cancelar"
                onPress={() => {
                  setModalVisible(false);
                  setIndiceAEliminar(-1);
                }}
                color="gray"
              />
              
              <Button
                title="Aceptar"
                onPress={confirmarEliminar}
                color="red"
              />
            </View>
          </View>
        </View>
      </Modal>
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
    flex:5,
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
    justifyContent:"center",
    paddingTop:10,
  },
  itemContenido:{
    paddingLeft:5,
    flex:4,
    backgroundColor: "saddlebrown ",
    flexDirection: "column",
     justifyContent:"center",
  },

  itemBotones:{
    backgroundColor: "darkorange ",
    flex:4,
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

  },
  titulo:{
      fontWeight: '700',
    fontSize:16
  },
  
  modalContenedor: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',

  },
  
  modalTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
 
  },
  
  modalMensaje: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  
  },
  
  modalBotones: {
    flexDirection: 'row',
    justifyContent:"space-around",
    width: '100%',
  },

},)
