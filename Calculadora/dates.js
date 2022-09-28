function hora(){
    let fecha;
    fecha = new Date();
    let cadena = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
    return cadena;
}
function fecha(){
    let fecha;
    fecha = new Date();
    let cadena = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();    
    return cadena;
}