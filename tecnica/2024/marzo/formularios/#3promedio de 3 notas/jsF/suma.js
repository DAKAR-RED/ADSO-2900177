/**
 * funcion Sumar
 * autor: Anibal Vargas
 * fecha: 24-06-2024
 */

function operaciones(){
    let numero1 = parseInt(document.getElementById('txtnumero1').value);
    let numero2 =  parseInt(document.getElementById('txtnumero2').value);
    let numero3 =  parseInt(document.getElementById('txtnumero2').value);
    let promedio;
    let rpromedio

    promedio = (numero1 + numero2 + numero3)/3;
   

    rpromedio= `promedio: ${promedio} <br>`;
    
    document.getElementById('operaciones').innerHTML = rpromedio

    return false
}




