/**
 * funcion saludar
 * autor: Anibal Vargas
 * fecha: 24-06-2024
 */

function saludar(){
    let saludo = document.getElementById('txtsaludo').value
    document.getElementById('saludo').innerHTML=`<strong>${saludo}<strong>`
    return false
}




     