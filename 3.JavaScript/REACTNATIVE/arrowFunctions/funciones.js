
//Syntaxys clasica

/*ejecutarSumar = function(){
    let valor1=recuperarTexto("txtValor1");
    let valor2=recuperarTexto("txtValor2");
    console.log("valor 1 : "+valor1+" valor 2: "+valor2);
}*/

//ARROW FUNCTION 

ejecutarSumar= ()=>{
    /*let valor1=recuperarEntero("txtValor1");
    let valor2=recuperarEntero("txtValor2");
    let resultadoSuma;
    console.log("valor 1 : "+valor1+" valor 2: "+valor2);
    resultadoSuma=sumar(valor1,valor2);
    console.log(resultadoSuma);*/
    ejecutarOperacion(sumar);//recibe el nombre de la funcion

}

sumar=(suma1,suma2)=>{
    let resultado;
    resultado=suma1+suma2;
    return resultado;
}

ejecutarRestar= ()=>{
  /*  let valor1=recuperarEntero("txtValor1");
    let valor2=recuperarEntero("txtValor2");
    let resultadoResta;
    console.log("valor 1 : "+valor1+" valor 2: "+valor2);
    resultadoResta=restar(valor1,valor2);
    console.log(resultadoResta);*/

    ejecutarOperacion(restar);
}

restar=(valor1,valor2)=>{
    return valor1-valor2;
}

ejecutarOperacion=(operar)=>{//recibe el nombre de la funcion a ejecutar
     let valor1=recuperarEntero("txtValor1");
    let valor2=recuperarEntero("txtValor2");
    resultado=operar(valor1,valor2);
    console.log(resultado);
}

imprimir=()=>{
    console.log("estoy imprimiendo");
}

saludar=()=>{
    alert(" APRENDIENDO PROGRAMACION FUNCIONAL");
}

ejecutar=(fn)=>{
    console.log("estoy ejecutando funciones.. ");
    fn();}


testEjecutar=()=>{
    ejecutar(imprimir);
    ejecutar(saludar);
    ejecutar(()=>{ console.log(" Soy una funcion sin nombre ");});
}