let numeroSecreto;
let intentos;
let numerosSorteados=[];
inicializar();
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function intentarAdivinar(numeroAdivinado){
    if(numeroAdivinado===numeroSecreto){
        asignarTextoElemento('p',`Felicidades! El numero era : ${numeroAdivinado}<br>acertaste el numero en ${intentos} ${(intentos===1)?'intento':'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroAdivinado<numeroSecreto){
            asignarTextoElemento('p','El numero secreto es mayor.');
        }else{
            asignarTextoElemento('p','El numero secreto es menor.');
        }
        intentos++;
    }
    return;
}
function inicializar(){
    asignarTextoElemento('h1','Secret Number');
    asignarTextoElemento('p','Introduce un numero del 1 al 10');
    intentos = 1;
    generarNumeroSecreto();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    for (let i=1;i<=10;i++){
        document.querySelector(`#b${i}`).removeAttribute('disabled');
    }
    if (numerosSorteados.length>30){
        location.reload();
    }
    return;
}
function desabilitar(bid){
    document.querySelector(`#b${bid}`).setAttribute('disabled','true');
}
function generarNumeroSecreto(){
    if(numeroSecreto===undefined){
        numeroSecreto = Math.floor(Math.random()*10)+1;
        numerosSorteados.push(numeroSecreto);
    }else{
        numeroSecreto = Math.floor(Math.random()*10)+1;
        if((numerosSorteados[numerosSorteados.length-1])===numeroSecreto){
            generarNumeroSecreto();
        }else{
            numerosSorteados.push(numeroSecreto);
        }
    }
    return;
}
