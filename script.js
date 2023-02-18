window.onload = iniciar;

function iniciar(){
    let saldoDinero = document.getElementById("saldoDinero");
    let notas = 0;
    if(localStorage.notas){
        notas = localStorage.notas;
    }else{
        localStorage.notas = 100;
    }
    saldoDinero.innerHTML = localStorage.notas;
    let Par = document.getElementById("Par");
    Par.addEventListener("click",functioPar);
    let Impar = document.getElementById("Impar");
    Impar.addEventListener("click",functioImpar);
}
function functioPar(){
    let error = document.getElementById("error");
    error.innerHTML = "";
    let mensaje1 = document.getElementById("mensaje1");
    mensaje1.innerHTML = "PROCESANDO ...";
    let cubo3D = document.getElementById("cubo3D");
    let dadoResultado2 = document.getElementById("dadoResultado2");
    dadoResultado2.innerHTML = "#";
    let dadoCerouno = Math.random();
    dadoCerouno = dadoCerouno*6;
    let dadoUnoseis = Math.ceil(dadoCerouno);
    let apuesta = document.getElementById("apuesta").value;
    apuesta = Math.round(apuesta*100)/100;
    if(parseFloat(localStorage.notas) == 0){
        mostrarError2();
    }else{
        if(parseFloat(apuesta) > parseFloat(localStorage.notas) || parseFloat(apuesta) < 0){
            mostrarError();
        }else{
            if(apuesta == 0){
                apuesta = 10;
            }
            cubo3D.style.animationName = "gira2";
            setTimeout(()=> {
                cubo3D.style.animationName = "gira1";
                dadoResultado2.innerHTML = dadoUnoseis;
                if(dadoUnoseis == 2 || dadoUnoseis == 4 || dadoUnoseis == 6){
                    let mensaje1 = document.getElementById("mensaje1");
                    mensaje1.innerHTML = `FELICIDADES GANASTE: $${apuesta}`;
                    localStorage.notas = parseFloat(localStorage.notas ) + apuesta;
                    saldoDinero.innerHTML = localStorage.notas;
                }else{
                    let mensaje1 = document.getElementById("mensaje1");
                    mensaje1.innerHTML = `MALA SUERTE PERDISTE: $${apuesta}`;
                    localStorage.notas = parseFloat(localStorage.notas ) - apuesta;
                    saldoDinero.innerHTML = localStorage.notas;
                }
            },5000)
        }
    }
    
}
function functioImpar(){
    let error = document.getElementById("error");
    error.innerHTML = "";
    let mensaje1 = document.getElementById("mensaje1");
    mensaje1.innerHTML = "PROCESANDO ...";
    let cubo3D = document.getElementById("cubo3D");
    let dadoResultado2 = document.getElementById("dadoResultado2");
    dadoResultado2.innerHTML = "#";
    let dadoCerouno = Math.random();
    dadoCerouno = dadoCerouno*6;
    let dadoUnoseis = Math.ceil(dadoCerouno);
    let apuesta = document.getElementById("apuesta").value;
    apuesta = Math.round(apuesta*100)/100;
    if(parseFloat(localStorage.notas) == 0){
        mostrarError2();
    }else{
        if(parseFloat(apuesta) > parseFloat(localStorage.notas) || parseFloat(apuesta) < 0){
            mostrarError();
        }else{
            if(apuesta == 0){
                apuesta = 10;
            }
            cubo3D.style.animationName = "gira2";
            setTimeout(()=> {
                cubo3D.style.animationName = "gira1";
                dadoResultado2.innerHTML = dadoUnoseis;
                if(dadoUnoseis == 1 || dadoUnoseis == 3 || dadoUnoseis == 5){
                    let mensaje1 = document.getElementById("mensaje1");
                    mensaje1.innerHTML = `FELICIDADES GANASTE: $${apuesta}`;
                    localStorage.notas = parseFloat(localStorage.notas ) + apuesta;
                    saldoDinero.innerHTML = localStorage.notas;
                }else{
                    let mensaje1 = document.getElementById("mensaje1");
                    mensaje1.innerHTML = `MALA SUERTE PERDISTE: $${apuesta}`;
                    localStorage.notas = parseFloat(localStorage.notas ) - apuesta;
                    saldoDinero.innerHTML = localStorage.notas;
                }
            },5000)
        }
    }
}
function mostrarError(){
    let error = document.getElementById("error");
    error.innerHTML = "EL VALOR DE APUESTA NO ES CORRECTO";
}
function mostrarError2(){
    let error = document.getElementById("error");
    error.innerHTML = "LO SIENTO YA PERDIO";
}
