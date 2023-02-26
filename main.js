const controle = document.querySelectorAll(".controle-ajuste")
const braco = document.querySelector("#braco")

controle.forEach( (Element) => {
    Element.addEventListener("click", (evento) => {
        modificacao(evento.target.textContent)
    })
})

function modificacao(escolha) {

    if(escolha == "+") {
        braco.value = parseInt(braco.value) + 1
    } else if (escolha == "-") {
        braco.value = parseInt(braco.value) - 1
    } else {
        console.log("ERRO")
    }

}