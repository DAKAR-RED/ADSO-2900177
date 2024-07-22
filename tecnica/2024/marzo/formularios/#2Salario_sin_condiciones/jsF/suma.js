/**
 * funcion Sumar
 * autor: Anibal Vargas
 * fecha: 24-06-2024
 */

function operaciones(){
    let numero1 = parseInt(document.getElementById('txtnumero1').value);
    let numero2 =  parseInt(document.getElementById('txtnumero2').value);
    let salario;
    let salarioTotal;
    let rsalarioT;
    let rdescuento;
    let rARL;
    let rpension;
    let rsalud;
    let salud;
    let porcentajeS = 0.12;
    let pension;
    let porcentajeP = 0.16;
    let ARL;
    let porcentajeARL = 0.052;
    let descuento;


    salario= (numero1 * numero2);
    ARL= (salario * porcentajeARL);
    pension = (salario * porcentajeP);
    salud= (salario * porcentajeS);
    descuento= (salud + pension + ARL);
    salarioTotal = (salario - descuento);
    rsalarioT= `salario total : ${salarioTotal} <br>`;
    rdescuento= `descuento : ${descuento} <br>`;
    rARL= `ARL : ${ARL} <br>`;
    rpension= `pension : ${pension} <br>`;
    rsalud= `salud : ${salud} <br>`;
    

    
    document.getElementById('operaciones').innerHTML =  rsalud + rARL + rdescuento + rpension + rsalarioT; 

    return false
}




