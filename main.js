const robotron = document.querySelector("#robotron");

const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste");
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent);
    })
})

const corpo = document.querySelectorAll(".peca-titulo");

function manipulaDados(operacao){
    if(operacao == "-" ){
        braco.value = braco.value < 1 ? '0' : braco.value = parseInt(braco.value) -1;
        
    } else {
        braco.value = braco.value >= 8 ? '8' : braco.value = parseInt(braco.value) +1;
    }
}