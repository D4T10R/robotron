const controle = document.querySelectorAll("[data-controle]")

controle.forEach( (Element) => {
    Element.addEventListener("click", (evento) => {
        modificacao(evento.target.textContent, evento.target.parentNode)
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