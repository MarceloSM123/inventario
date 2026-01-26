//ESTRUCTURA CLASICA

/*recuperarTexto=function(idComponente){
    let idComponente1 =document.getElementById(idComponente);
    let valorComponente =idComponente1.value;
    return valorComponente;
}*/

//ARROW FUNCTION--en ligar de function va una flecha
recuperarTexto=(idComponente)=>{
    let idComponente1 =document.getElementById(idComponente);
    let valorComponente =idComponente1.value;
    return valorComponente;
}

recuperarEntero = (idComponente)=>{
     let idComponente1 =document.getElementById(idComponente);
    let valorComponente =parseInt(idComponente1.value);
    return valorComponente;

}
recuperarFloat = (idComponente)=>{
    return parseFloat(document.getElementById(idComponente).value);
}