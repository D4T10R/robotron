const robotron = document.querySelector('#robotron')

const robotronCores = [
    "./img/Robotron 2000 - Amarelo.png", 
    "./img/Robotron 2000 - Branco.png", 
    "./img/Robotron 2000 - Preto.png",
    "./img/Robotron 2000 - Rosa.png", 
    "./img/Robotron 2000 - Vermelho.png"] 

const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
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

robotron.addEventListener('click', () => {
    var mudar = Math.floor(Math.random()*robotronCores.length)
    console.log(mudar)
    robotron.src= robotronCores[mudar]
})

controle.forEach( (Element) => {
    Element.addEventListener("click", (evento) => {
        modificacao(evento.target.textContent, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function modificacao(escolha, controle) {

    const peca = controle.querySelector("[data-contador]")

    if(escolha == "+") {
        peca.value = parseInt(peca.value) + 1
    } else if (escolha == "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        console.log("ERRO")
    }

}


function atualizaEstatisticas (peca) {

    estatisticas.forEach( (Element) => {
        console.log(Element.textContent = parseInt(Element.textContent) + pecas[peca][Element.dataset.estatistica] )
    })



    console.log(pecas)

}