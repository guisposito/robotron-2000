const controle = document.querySelectorAll("[data-controle]");

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    })
})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector(".controle-contador");
    if(operacao == "-" ){
        peca.value = peca.value < 1 ? '0' : peca.value = parseInt(peca.value) -1;
        
    } else {
        peca.value = peca.value >= 8 ? '8' : peca.value = parseInt(peca.value) +1;
    }
}