recuperar=()=>{
    /*let frutas=[]; //opcion de declaracion
    frutas.push("Platano");*/

    let frutas=["Pera","Manzana","Sandia"];
    frutas.push("Platano");
    return frutas;
}

testRecuperar=()=>{
    let misFrutas=recuperar();
    let frutasPrimera=misFrutas[0];
    let otraFruta=misFrutas[1];
    console.log("1>>>>"+frutasPrimera);
    console.log("2>>>>"+otraFruta);

}
testRecuperarDes=()=>{
    let [frutasPrimera,otraFruta]=recuperar();
    console.log("1>>>>"+frutasPrimera);
    console.log("2>>>>"+otraFruta);

}