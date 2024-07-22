/**
 * funcion Sumar
 * autor: Anibal Vargas
 * fecha: 24-06-2024
 */

function operaciones(){
    let numero1 = parseInt(document.getElementById('txtnumero1').value);
    let numero2 =  parseInt(document.getElementById('txtnumero2').value);
    let areaTriangulo;
    let areaCuadrado;
    let areaRectangulo;
    let rareaT;
    let rareaC;
    let rareaR;

    areaTriangulo= (numero1 * numero2)/2;
    areaCuadrado= numero1 * numero2;
    areaRectangulo= numero1 * numero2;
   

    rareaT= `Area del triangulo : ${areaTriangulo} <br>`;
    rareaC= `Area del cuadrado : ${areaCuadrado} <br>`;
    rareaR= `Area del rectangulo : ${areaRectangulo} <br>`;
    
    
    document.getElementById('operaciones').innerHTML = rareaC + rareaR + rareaT; 

    return false
}




