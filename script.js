const quantcookies = document.querySelector("#quant-cookies")
const imgCookie = document.querySelector("#img-cookie")

//valor do placar
let valorQuantCookies = 0
quantcookies.value = valorQuantCookies

imgCookie.addEventListener("click", atualizarJogo)

function atualizarQuantCookies() {
    //atualizando valor do placar
    valorQuantCookies = valorQuantCookies + 1
    //Mostrando novo valor do placar
    quantcookies.value = valorQuantCookies
}

function atualizarJogo() {
    atualizarQuantCookies()

    // Regras do Jogo
    if(valorQuantCookies>= 10) {
        const imgcursor = document.querySelector("#img-cursor")
        imgcursor.style.borderColor = "blue";
    }

    if(valorQuantCookies>=50){
        const imgvovo = document.querySelector("#img-vovo")
        imgvovo.style.borderColor = "blue";
    }
}