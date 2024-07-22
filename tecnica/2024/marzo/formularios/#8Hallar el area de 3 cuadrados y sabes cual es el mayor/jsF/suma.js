/**
 * funcion Sumar
 * autor: Anibal Vargas
 * fecha: 24-06-2024
 */

function operaciones(){
    let numero1 = parseInt(document.getElementById('txtnumero1').value);
    let numero2 =  parseInt(document.getElementById('txtnumero2').value);
    let numero3 = parseInt(document.getElementById('txtnumero3').value);
    let area1;
    let rarea1;
    let area2;
    let rarea2;
    let area3;
    let rarea3;

    area1 = numero1 * numero1;
    area2 = numero2 * numero2;
    area3 = numero3 * numero3;

    
    
    rarea1= `area del 1er cuadrado : ${area1} <br>`;
    rarea2= `area del 2do cuadrado : ${area2} <br>`;
    rarea3= `area del 3er cuadrado : ${area3} <br>`;
    

    
    document.getElementById('operaciones').innerHTML =  area1 + area2 + area3; 

    return false
}






