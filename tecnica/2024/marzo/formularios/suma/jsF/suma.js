/**
 * funcion Sumar
 * autor: Anibal Vargas
 * fecha: 24-06-2024
 */

function operaciones(){
    let numero1 = parseInt(document.getElementById('txtnumero1').value);
    let numero2 =  parseInt(document.getElementById('txtnumero2').value);
    let sumar;
    
    let rsumar;
    

    sumar = numero1 + numero2;
   

    rsumar= `Suma: ${sumar} <br>`;
    
    document.getElementById('operaciones').innerHTML = rsumar 

    return false
}




