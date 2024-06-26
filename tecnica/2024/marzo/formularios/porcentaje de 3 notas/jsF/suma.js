/**
 * funcion Sumar
 * autor: Anibal Vargas
 * fecha: 24-06-2024
 */

function operaciones(){
    let numero1 = parseInt(document.getElementById('txtnumero1').value);
    let numero2 =  parseInt(document.getElementById('txtnumero2').value);
    let numero3 =  parseInt(document.getElementById('txtnumero2').value);
    let porcentaje1;
    let porcentaje2;
    let porcentaje3;
    let rporcentaje1;
    let rporcentaje2;
    let rporcentaje3;
    let sumaTotal;
    let rsumaTotal;

    sumaTotal = numero1 + numero2 + numero3;

    porcentaje1 = (numero1 / sumaTotal)*100;
    porcentaje2 = (numero2 / sumaTotal)*100;
    porcentaje3 = (numero3 / sumaTotal)*100;
   

    rporcentaje1= `porcentaje de la 1ra nota : ${porcentaje1} <br>`;
    rporcentaje2= `porcentaje de la 2da nota : ${porcentaje2} <br>`;
    rporcentaje3= `porcentaje de la 3ra nota : ${porcentaje3} <br>`;
    rsumaTotal= `suma toal de las 3 notas : ${sumaTotal} <br>`;
    document.getElementById('operaciones').innerHTML = rporcentaje1 + rporcentaje2 + rporcentaje3 + rsumaTotal;

    return false
}




