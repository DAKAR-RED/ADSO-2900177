/**
 * funcion Sumar
 * autor: Anibal Vargas
 * fecha: 24-06-2024
 */

function operaciones(){
    let numero1 = parseInt(document.getElementById('txtnumero1').value);
    let numero2 =  parseInt(document.getElementById('txtnumero2').value);
    let numero3 = parseInt(document.getElementById('txtnumero3').value);
    let numero4 =  parseInt(document.getElementById('txtnumero4').value);
    let numero5 = parseInt(document.getElementById('txtnumero5').value);
    let numero6 =  parseInt(document.getElementById('txtnumero6').value);
    let area1;
    let rarea1;
    let area2;
    let rarea2;
    let area3;
    let rarea3;

    area1 = numero1 * numero2;
    area2 = numero3 * numero4;
    area3 = numero5 * numero6;

    if (area1 == area2 && area1 == area3 && area2 == area3){
        return "Las áreas son iguales"
    }else{
        if(area1 > area2 && area1 > area3){
            return "área uno mayor: "+area1;
        }else{
            if(area2 > area1 && area2 > area3){
                return "área dos mayor: "+area2;
            }else{
                return "área tres mayor: "+area3;
            }
        }
    }

}
    
    rarea1= `area del 1er cuadrado : ${area1} <br>`;
    rarea2= `area del 2do cuadrado : ${area2} <br>`;
    rarea3= `area del 3er cuadrado : ${area3} <br>`;
    

    
    document.getElementById('operaciones').innerHTML =  rarea1 + rarea2 + rarea3; 

    return false







