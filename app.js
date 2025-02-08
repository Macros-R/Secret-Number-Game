let numeroSecreto;
let intentos;
let numerosSorteados=[];
inicializar();
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function intentarAdivinar(){
    let numeroAdivinado = parseInt(document.getElementById('numeroAdivinado').value);
    if(numeroAdivinado===numeroSecreto){
        asignarTextoElemento('p',`Felicidades! acertaste el numero en ${intentos} ${(intentos===1)?'intento':'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroAdivinado<numeroSecreto){
            asignarTextoElemento('p','El numero secreto es mayor.');
        }else{
            asignarTextoElemento('p','El numero secreto es menor.');
        }
        intentos++;
        limpiar();
    }
    return;
}
function limpiar(){
    document.querySelector('#numeroAdivinado').value='';
    return;
}
function inicializar(){
    asignarTextoElemento('h1','Secret Number');
    asignarTextoElemento('p','Introduce un numero del 1 al 10');
    intentos = 1;
    generarNumeroSecreto();
    console.log(numerosSorteados)
    limpiar();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    if (numerosSorteados.length>15){
        location.reload();
    }
    return;
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
