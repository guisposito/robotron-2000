const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
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

function atualizaEstatisticas(peca) {
    //buscando a peca no array de pecas
    console.log(pecas[peca]);

    estatisticas.forEach((elemento) => {
        //console com o conteudo de cada item do array dos elementos de estatisticas
        console.log(elemento.textContent);
        //buscando o nome do elemento
        console.log(elemento.dataset.estatistica);
        //pegando o elemento vindo do array de estatistica e somando com o valor do objeto de peças
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}