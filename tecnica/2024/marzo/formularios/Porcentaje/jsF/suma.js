/**
 * funcion Sumar
 * autor: Anibal Vargas
 * fecha: 24-06-2024
 */

function operaciones(){
    let numero1 = parseInt(document.getElementById('txtnumero1').value);
    let numero2 =  parseInt(document.getElementById('txtnumero2').value);
    let porcentaje;
    let rporc;
    

    porcentaje = (numero1 * numero2)/100;
   

    rporc= `porcentaje: ${porcentaje} <br>`;
    
    document.getElementById('operaciones').innerHTML = rporc

    return false
}




